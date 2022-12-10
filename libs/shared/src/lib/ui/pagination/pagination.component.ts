import {
  Component,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'lib-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {

  @Input()  currentPage = 1;

  @Output() currentPageChange = new EventEmitter<number>();

  private _totalItems = 0;

  /**
   * 總筆數
   */
  @Input() set totalItems(value: number) {
    this._totalItems = value;
    this.setPageGroupList();
  }
  get totalItems(): number {
    return this._totalItems;
  }

  private _itemsPerPage = 10;

   /**
   * 每頁顯示幾筆
   */
  @Input() set itemsPerPage(value: number) {
    this._itemsPerPage = value;
    this.setPageGroupList();
  }
  get itemsPerPage(): number {
    return this._itemsPerPage;
  }

  @Output() pageChange = new EventEmitter<number>();

  /**
   * 最小顯示頁碼數量
   */
  minPageNum = 1;

  /**
   * 最大顯示頁碼數量
   */
  maxPageNum = 5;

  /**
   * 顯示頁碼
   */
  pageGroupList: {
    key: number;
    value: number;
  }[] = [];

  /**
   * 顯示頁碼數量範圍
   */
  displayRange = 5;

  /**
   *  當前的頁碼群組
   */
  currentPageGroup = 0;

  constructor() {}

  ngOnInit() {}

  /**
   * 設定頁碼群組
   */
  setPageGroupList() {

    this.currentPageGroup = 0;
    this.pageGroupList = [];
    this.minPageNum = 0;
    this.maxPageNum = 0;

    if (this.totalItems >= 1) {
      this.setShowMinAndMaxPage();
    }

    let count = Math.floor(this.totalItems / this.itemsPerPage);

    if (this.totalItems % this.itemsPerPage > 0) {
      count += 1;
    }

    for (let i = 0; i < count; i++) {
      this.pageGroupList.push({
        key: i,
        value: i + 1,
      });
    }

  }

  /**
   * 設定最大與最小顯示的頁碼
   */
  setShowMinAndMaxPage(): void {
    this.minPageNum = 1 + this.currentPageGroup * this.displayRange;
    this.maxPageNum = this.displayRange * (this.currentPageGroup + 1);
  }

  /**
   * 是否在顯示頁碼的範圍內
   *
   * @param {number} page
   * @returns {boolean}
   */
  canShowPage(page: number): boolean {
    let canShow = false;

    if (this.pageGroupList.length === 1) {
      canShow = true;
    } else {
      canShow = this.minPageNum <= page && page <= this.maxPageNum;
    }

    return canShow;
  }

  /**
   * 頁碼 增加 相關邏輯
   *
   * @param {number} count - 要增加的頁碼數量
   */
  incrementCurrentPage(count: number): void {
    this.currentPage += count;

    if (this.currentPage > this.pageGroupList.length) {
      this.currentPage = this.pageGroupList.length;
    }

    if (this.currentPage > this.maxPageNum) {
      this.currentPageGroup = this.currentPageGroup + 1;
    }

    this.setShowMinAndMaxPage();
    this.currentPageChange.emit(this.currentPage);
    this.pageChange.emit(this.currentPage);
  }

  /**
   * 頁碼減少 相關邏輯
   *
   * @param {number} count - 要減少的頁碼數量
   */
  decrementCurrentPage(count: number): void {
    this.currentPage -= count;

    if (this.currentPage <= 0) {
      this.currentPage = 1;
      this.currentPageGroup = 0;
    }

    if (this.currentPage < this.minPageNum) {
      this.currentPageGroup = this.currentPageGroup - 1;
    }

    this.setShowMinAndMaxPage();
    this.currentPageChange.emit(this.currentPage);
    this.pageChange.emit(this.currentPage);
  }

  /**
   * 點擊頁碼
   *
   * @param {number} page - 頁碼
   */
  clickPageNum(page: number): void {
    this.currentPage = page;

    if (this.currentPage > this.maxPageNum) {
      this.currentPageGroup += 1;
    } else if (this.currentPage < this.minPageNum) {
      this.currentPageGroup -= 1;
    }

    this.setShowMinAndMaxPage();
    this.currentPageChange.emit(this.currentPage);
    this.pageChange.emit(this.currentPage);
  }
}
