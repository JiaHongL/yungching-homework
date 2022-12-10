# 台北旅遊景點 open api 串接

## 說明

[Demo 網址](https://jiahongl.github.io/yungching-homework/#/search) 

已完成的功能

- [x] 使用 純 scss 製作簡易樣式 與 RWD
- [x] 串接 open api 製作 旅遊景點網站  
- [x] 查詢頁 有過濾功能與頁碼分頁
- [x] 查詢頁 可單筆或多筆加到我的最愛
- [x] 我的最愛 的資料儲存在 client 端
- [x] 我的最愛 可以單筆或多筆移除
- [x] 我的最愛 可編輯相關內容
- [x] 編輯的內容 驗證 必填、電話格式、信箱格式

## 專案架構

<table>
	<tr>
		<td colspan="99"> src / app 底下 </td>
	</tr>
	<tr>
		<td rowspan="2">Layout</td>
		<td rowspan="2">layout</td>
		<td colspan="99">共用的版型 - 元件</td>
	</tr>
	<tr>
		<td>header</td>
		<td> 導航欄 - 元件</td>
	</tr>
  <tr>
		<td rowspan="2">Pages</td>
		<td> search</td>
		<td colspan="99"> 查詢頁 - 元件</td>
	</tr>
  <tr>
		<td> favorites </td>
		<td colspan="99"> 我的最愛頁面 - 元件</td>
	</tr>
</table>

<table>
	<tr>
		<td colspan="99"> libs / shared / src / lib 底下 </td>
	</tr>
	<tr>
		<td> Models </td>
		<td colspan="99"> 各式的資料模型 </td>
	</tr>
  <tr>
		<td> Resolver </td>
		<td colspan="99"> 各式的 Resolver </td>
	</tr>
  <tr>
		<td> Validate </td>
		<td colspan="99"> 各式的客製表單驗證 </td>
	</tr>
  </tr>
  <tr>
		<td> Services </td>
		<td colspan="99"> 各式的 api service </td>
	</tr>
  </tr>
  <tr>
		<td rowspan="8"> UI </td>
		<td> block-view </td>
    <td colspan="2"> 遮罩功能 - 元件 </td>
	</tr>
  <tr>
		<td> button </td>
		<td colspan="2"> 按鈕 - 元件</td>
	</tr>
  <tr>
		<td> pagination </td>
		<td colspan="2"> 頁碼 - 元件</td>
	</tr>
  <tr>
		<td rowspan="2"> form </td>
		<td> select </td>
    <td> 下拉 - 元件</td>
	</tr>
  <tr>
		<td> text-input </td>
		<td> 輸入框 - 元件</td>
	</tr>
  <tr>
		<td rowspan="2"> travel-list </td>
		<td colspan="99"> 景點元件</td>
	</tr>
  <tr>
		<td> edit-travel-model </td>
		<td> 編輯景點內容視窗 - 元件</td>
	</tr>
</table>
