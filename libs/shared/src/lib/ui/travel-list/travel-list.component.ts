import { Component } from '@angular/core';

@Component({
  selector: 'lib-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent {

  mockData = {
    "total": 10,
    "data": [
      {
        "id": 105,
        "name": "大稻埕街區_迪化街店屋",
        "name_zh": null,
        "open_status": 1,
        "introduction": "舊時淡水河旁沒有河堤，貴德街就直接面河，渡海而來的大陸南北貨下船後，就在貴德街後面的迪化街陳列販賣，很多迪化街商人都因貿易而成一時鉅富，他們蓋的房子就格外漂亮，這些房子為了適應臺灣多雨的天氣都有騎樓，但是房屋對外的牆面卻多為仿西式建築的裝飾，造成獨特的中西式混合的建築。這些老店屋最大的特色，就是店屋深度的十分狹長，前面做為店鋪之用，後頭就是工廠或倉庫，呈現早期聚集式街屋的獨特色。\r\n\r\n大稻埕內最著名的街道為迪化街，街區內的店家販售著各式各樣的乾貨、中藥材、編織商品等，同時也是年節時重要的年貨大街。另有許多市定古蹟，如台北霞海城隍廟、慈聖宮、辜宅、新芳春茶行等，保留著歷史的痕跡，皆值得走訪。而大稻埕碼頭內的貨櫃市集駐有多種美食，可以在享用美食的同時邊享受美景及夕陽，不定時還會舉辦各項活動及表演。\r\n\r\n現今的大稻埕還保有傳統建築，紅磚瓦屋、復古的街道，與周邊新建的建物呈現新舊交織的畫面。周末時間不妨到大稻埕走走逛逛，租套古服一同沉浸在歷史的氛圍中。\r\n",
        "open_time": "開放空間",
        "zipcode": "103",
        "distric": "大同區",
        "address": "103 臺北市大同區迪化街1段",
        "tel": "+886-2-27208889",
        "fax": "",
        "email": "",
        "months": "01,07,02,08,03,09,04,10,05,11,06,12",
        "nlat": 25.06086,
        "elong": 121.50926,
        "official_site": "",
        "facebook": "",
        "ticket": "",
        "remind": "",
        "staytime": "",
        "modified": "2022-12-05 16:01:43 +08:00",
        "url": "https://www.travel.taipei/zh-tw/attraction/details/105",
        "category": [
          {
            "id": 13,
            "name": "歷史建築"
          }
        ],
        "target": [
          {
            "id": 61,
            "name": "親子共學"
          }
        ],
        "service": [
          {
            "id": 146,
            "name": "公廁"
          }
        ],
        "friendly": [],
        "images": [
          {
            "src": "https://www.travel.taipei/image/223217",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/223218",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/223219",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/223210",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/223211",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/223212",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/223213",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/223214",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/223215",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/223216",
            "subject": "",
            "ext": ".jpg"
          }
        ],
        "files": [],
        "links": []
      },
      {
        "id": 2576,
        "name": "國立臺灣博物館_鐵道部園區",
        "name_zh": null,
        "open_status": 1,
        "introduction": "國定古蹟臺灣總督府鐵道部位於忠孝西路、塔城街、鄭州路、延平北路間，屬交通部臺灣鐵路管理局管轄。1885年臺灣巡撫劉銘傳聘請英國與德國顧問，於淡水河碼頭內建造機器局，組裝槍砲彈藥及鑄造貨幣，內有鎔鐵所、鍛工場等。1895年日本軍方接收機器局，改為臺北兵器修理所，製造並修理陸軍所管兵器，可製造彈丸、信管、小銃丸及藥筴、船舶、鐵道鐵橋等，之後改稱為臺灣砲兵工廠，1900年由陸軍省移交鐵道部，同年改為臺北工場。1908年臺灣西部縱貫鐵路開通，鐵路交通運量與車輛維修需求大增，1909年臺北工場向東擴張，新建車輛修理工場、塗工場。1915年起拆除基地南邊原有建物，1918年新建鐵道部廳舍，與臺北工場並存，成為南廳舍、北工廠配置，直到1934年臺北工場搬遷至松山(今國定古蹟臺北機廠)為止，街廓內原有將近四十棟建物，歷經2005年興建捷運以及2013古蹟修復拆除不保存者，目前尚餘十棟，其中包含八處法定文化資產：鐵道部、食堂、八角樓男廁、電源室、工務室、戰時指揮中心、清代機器局遺構以及臺北工場(不在鐵道部園區範圍內)。\r\n\r\n戰後鐵道部改為臺灣鐵路管理局。因都市計畫劃道路塔城街於1967年開通，切斷與西側鐵道部官舍群連結形成今日所見的街廓。1992年臺北市政府指定鐵道部廳舍為三級古蹟，1993年臺鐵總局遷移至臺北車站新廈。2005年文建會委託東海大學、中原大學進行古蹟調查研究及再利用規劃，2006年交通部與臺灣鐵路管理局，以及文建會與國立臺灣博物館簽訂臺灣博物館系統聯盟協議書，鐵道部古蹟修復再利用工作正式開始，以「鐵道部博物館園區」為基礎概念，目標為建置現代性展示主題之複合使用園區，並整合周邊都市及歷史涵構。2007年文建會指定為國定古蹟，並納入八角樓、食堂、電源室、工務室、戰時指揮中心為古蹟範圍，臺北工場及清代機器局遺址則分別由臺北市於2008年及2010年指定為市定古蹟，2009年起由臺博館代管此區土地建物。規劃中的鐵道博物館展示主題將主要架構在古蹟與基地、鐵道文化及現代性等相關議題之上，未來也將涉及整合西側原機器局工廠範圍內E1E2街廓。\r\n\r\n(資料來源：國立臺灣博物館)",
        "open_time": "",
        "zipcode": "103",
        "distric": "大同區",
        "address": "103 臺北市大同區延平北路一段2號",
        "tel": "+886-2-25589790",
        "fax": "",
        "email": "",
        "months": "01,07,02,08,03,09,04,10,05,11,06,12",
        "nlat": 25.04868,
        "elong": 121.5113,
        "official_site": "https://www.ntm.gov.tw/submenu_373.html",
        "facebook": "https://www.facebook.com/NTMuseum",
        "ticket": "",
        "remind": "1.定時導覽服務：週二至週日 10:30、14:30\r\n鐵道部園區導覽主題：認識鐵道部\r\n2.預約團體導覽服務時段：週二至週五，每場40～60分鐘 （國定假日及連假恕不開放團體預約導覽）\r\n請於導覽14天前至鐵道部團體預約導覽服務網站申請",
        "staytime": "",
        "modified": "2022-12-05 16:01:41 +08:00",
        "url": "https://www.travel.taipei/zh-tw/attraction/details/2576",
        "category": [
          {
            "id": 13,
            "name": "歷史建築"
          },
          {
            "id": 15,
            "name": "藝文館所"
          },
          {
            "id": 19,
            "name": "親子共遊"
          }
        ],
        "target": [
          {
            "id": 61,
            "name": "親子共學"
          },
          {
            "id": 62,
            "name": "校外教學"
          }
        ],
        "service": [],
        "friendly": [],
        "images": [
          {
            "src": "https://www.travel.taipei/image/207889",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/207890",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/207891",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/207892",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/207893",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/207894",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/207895",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/207896",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/207888",
            "subject": "",
            "ext": ".jpg"
          }
        ],
        "files": [],
        "links": [
          {
            "src": "https://www.ntm.gov.tw/content_374.html",
            "subject": "開放時間與票價"
          }
        ]
      },
      {
        "id": 2216,
        "name": "臺灣文學基地",
        "name_zh": null,
        "open_status": 1,
        "introduction": "詩的復興基地──臺灣文學基地(齊東詩舍)\r\n\r\n詩是淬鍊的語言，寫詩、讀詩、以詩入歌是臺灣人的生活美學，也是文學的根本。\r\n\r\n文化部(前文建會)在2009年委請臺北市政府文化局修繕齊東街日式宿舍(濟南路二段25、27號)完成之後，前部長龍應台將此素雅的歷史建築命名為「齊東詩舍」，為打造臺灣文學基地(齊東詩舍)成為文學地景亮點，前部長龍應台特別請託陳瑞憲先生規劃詩舍空間機能及設計，並委請國立臺灣文學館進行管理與策劃展覽。\r\n\r\n同時推動「詩的復興」計畫，並且引入民間活水，獲成霖企業股份有限公司歐陽明董事長捐款贊助首年開辦經費，自2014年起推廣詩的創作交流。前部長龍應台欣喜表示：「文化部重新利用歷史建築，是方塘一鑑開；企業家支持詩歌創作，是源頭活水來。」\r\n\r\n建築風格\r\n臺灣文學基地(齊東詩舍)建築為「和洋折衷」風格。屋頂形式屬「寄棟造」，屋根(屋頂)均覆蓋黑色日本瓦，並在屋脊末端使用鬼瓦收邊。建築內部保存駄箱、床之間、床脇、附書院、戶袋、雨戶、配餐窗、書齋、掃出窗等日式空間元素及相關建具。\r\n\r\n文化資產保存\r\n2000年，時任臺北市文化局局長龍應台關注齊東街日式宿舍及老樹保存的重要性，並著手相關規劃。2002年12月齊東街幸福里里民源於對這批建築歷史記憶空間的認同與情感，共同發起響應就地保存、給下一代認識日式宿舍建築的教育機會，辦理一連串搶救活動。在公私部門共同努力之下，臺北市政府文化局於2006年7月，將齊東宿舍群與老樹街區劃設為「臺北市中正區齊東街保存區及聚落風貌保存特定專用區」，遂有後續文化資產保存及修復行動相繼開展，2020年「齊東詩舍」正式轉型為「臺灣文學基地」，園區自濟南路二段25、27號擴增齊東街53巷2號至10號，成為臺北市內最大、修復最完整的日式宿舍群。\r\n\r\n歷史沿革\r\n\r\n．清代時期\r\n齊東街舊稱「三板橋街」，康熙年間是連接艋舺(萬華)到朱厝崙(中崙)、錫口(松山)及雞籠(基隆)的重要連接幹道。清代時多運送煤炭、米糧等民生用品，供應城內的生活用品。附近區域稱為「三板橋庄」，屬淡水廳大加納堡16庄之一。\r\n\r\n．日治時期\r\n齊東街日式住宅區在日本時期稱為幸町職務官舍群，約建於1920年代至1940年代。此區為總督府所屬單位不同階級職務官舍的分佈區，南端濟南路二段一帶為總督府及軍方重要高等職務官舍，其出現年代於1935年間；北端齊東街一帶建築群發展較晚，為1940年間低階官署機構職員官舍舍，充分反映日治時代晚期官舍之代表作品。\r\n\r\n．民國時期\r\n光復後，國民政府亦將此區沿用為中央政府官員之宿舍群，其中濟南路二段27號在1949年由當時空軍總司令部少將副總司令王叔銘入遷，王將軍遷入後依序任職「中將副總司令」、「空軍上將總司令」、「國防部參謀總長」、「總統府戰略顧問委員會副主任委員」，直到1992年才遷出官邸。之後，臺北市政府文化局於2006年指定為「臺北市中正區齊東街保存區及聚落風貌保存特定專用區」。2020年「齊東詩舍」正式轉型，名稱變更為「臺灣文學基地」。\r\n\r\n(資料來源：齊東詩舍官網)",
        "open_time": "每週二至週日 10:00 ~ 18:00 （週一休館）",
        "zipcode": "100",
        "distric": "中正區",
        "address": "100 臺北市中正區濟南路二段27號",
        "tel": "+886-2-23279657",
        "fax": "",
        "email": "",
        "months": "01,07,02,08,03,09,04,10,05,11,06,12",
        "nlat": 25.04121,
        "elong": 121.5285,
        "official_site": "https://tlb.nmtl.gov.tw/index.php",
        "facebook": "https://www.facebook.com/TaiwanLiteratureBase/",
        "ticket": "免費參觀",
        "remind": "入內參觀請脫鞋。\r\n\r\n請將食物、飲料放置於入口處，待離開再行取回；另請遵守各項規定，並配合服務人員指示。\r\n\r\n拍攝時不得使用輔助設備或影響安全動線及他人參觀權益；具商業用途等特殊需求者，應事先提出申請。",
        "staytime": "",
        "modified": "2022-12-05 16:01:39 +08:00",
        "url": "https://www.travel.taipei/zh-tw/attraction/details/2216",
        "category": [
          {
            "id": 15,
            "name": "藝文館所"
          }
        ],
        "target": [
          {
            "id": 62,
            "name": "校外教學"
          }
        ],
        "service": [],
        "friendly": [],
        "images": [
          {
            "src": "https://www.travel.taipei/image/193197",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/193198",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/193199",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/193200",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/193190",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/193191",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/193192",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/193193",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/193194",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/193195",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/193196",
            "subject": "",
            "ext": ".jpg"
          }
        ],
        "files": [],
        "links": []
      },
      {
        "id": 319,
        "name": "青年公園",
        "name_zh": null,
        "open_status": 1,
        "introduction": "青年公園為大臺北都會區綜合性開放公園，位於臺北市萬華區西側，東臨國興路、西頻青年路、南靠水源路、北向青年路，面積高達24.44公頃，其用地溯源於日據時代，原為練兵場後改為機場，因位於臺北市南端，並與北端松山機場南北相對，而稱為南機場，民國42年台北鄉村俱樂部與國防部合作，成立台北高爾夫球俱樂部，民國63年青年節，奉行政院指示由臺北市政府接管球場，改建為青年公園，同年10月正式接管，並於民國66年9月施建完工，成為臺北市民休閒活動的好去處。\r\n\r\n園內設施完善，花木扶疏，景緻優美，運動設施有（售票）臨國興路設高爾夫球場一處，臨水源路並設置泳池8座，公園面南側有網球場6面，泳池大樓內附設撞球室，可供撞球。免費使用之運動遊樂設施有籃球場、羽球場、棒球場、溜冰場、網球練習牆、野外運動場，分布園內各處。另園內並有盆栽館、閱覽室、視聽教室、露天音樂台、駐警室等社教服務設施以服務市民、遊客。除了各項硬體服務設施外，公園景觀的規劃，綠化設施配置，植栽分布實為建構公園美化的主軸。 公園大門入口，正門花壇成放射狀配置，並植有蒔花，鮮豔美麗，（如鳳仙花、雞冠花、一串花、雪茄花、醉蝶花、金露華等）其後側並植有灌木如杜鵑、狀元紅、變葉木、羅漢松、仙丹等灌木花卉，予人入園有繁花處處，五彩繽紛，美不勝收之感。\r\n\r\n園內中央廣植草皮，碧草如茵，青翠整齊，四周並以榕樹對植形成濃蔭密布之綠蔭隧道，遠處眺望一片綠海，徜徉其間，猶如置身森林浴，身心俱得調劑，草坪區旁側並廣植有針葉樹林（南洋杉）晨間有眾多市民於該處運動，有益健康。草坪區後側有水道與園內東北側九曲橋相通。水塘兩側，遍植水生植物，其間並有噴泉處處，相互輝映，益盛景觀，另園內棒球場東側廣植楓樹，楓樹俱成齡，已成楓林，每於落葉時節，楓葉片片亦屬冬季景緻之一，另園內四周並植有杜鵑，春天開花時節，色彩奪目艷麗，增添公園美景。此外公園內均遍植喬、灌木、草皮並間有花壇佈置及園椅、亭榭、健康步道、雕塑等。園路寬坦，處處景點，允為大型綜合公園之佳作。\r\n\r\n青年公園面積廣闊，設備多元且完善，提供了市民大眾休憩、運動、社教、復健功能，從少年到老年，無論殘障或健康者，都可盡情享用，公園要美除了營造美景之外，更須要結合市民大眾，來觀賞使用，疼惜愛護，一起享受市政建設的成果。",
        "open_time": "",
        "zipcode": "108",
        "distric": "萬華區",
        "address": "108 臺北市萬華區水源路199號",
        "tel": "+886-2-23032451",
        "fax": "",
        "email": "",
        "months": "01,07,02,08,03,09,04,10,05,11,06,12",
        "nlat": 25.02227,
        "elong": 121.50703,
        "official_site": "https://parks.taipei/parks/m2/pkl_parks_m2C.php?sid=565",
        "facebook": "",
        "ticket": "",
        "remind": "",
        "staytime": "",
        "modified": "2022-12-05 16:01:36 +08:00",
        "url": "https://www.travel.taipei/zh-tw/attraction/details/319",
        "category": [
          {
            "id": 16,
            "name": "戶外踏青"
          },
          {
            "id": 19,
            "name": "親子共遊"
          }
        ],
        "target": [
          {
            "id": 61,
            "name": "親子共學"
          },
          {
            "id": 62,
            "name": "校外教學"
          },
          {
            "id": 65,
            "name": "賞鳥族"
          }
        ],
        "service": [
          {
            "id": 146,
            "name": "公廁"
          }
        ],
        "friendly": [],
        "images": [
          {
            "src": "https://www.travel.taipei/image/65582",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/65544",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/65545",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/65553",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/65555",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/65568",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/65569",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/65572",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/65574",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/65576",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/65579",
            "subject": "",
            "ext": ".jpg"
          }
        ],
        "files": [],
        "links": []
      },
      {
        "id": 2375,
        "name": "松錦公園",
        "name_zh": null,
        "open_status": 1,
        "introduction": "松錦公園分為松錦一號公園與松錦二號公園，同樣位於民生東路二段與吉林路交界，且鄰近捷運行天宮站，坐落於住宅區內，提供當地居民一個散步休憩的場所。公園內的植栽造景維持得乾淨整潔，園區內的涼亭舒適寬廣成為民眾交流談天的社交空間，此外松錦公園鄰近松江市場，可以順道至松江市場買些生鮮、日用品及走走逛逛。",
        "open_time": "",
        "zipcode": "104",
        "distric": "中山區",
        "address": "104 臺北市中山區民生東路二段127巷",
        "tel": "+886-2-25850192",
        "fax": "",
        "email": "",
        "months": "01,07,02,08,03,09,04,10,05,11,06,12",
        "nlat": 25.05962,
        "elong": 121.53211,
        "official_site": "",
        "facebook": "",
        "ticket": "",
        "remind": "",
        "staytime": "",
        "modified": "2022-12-05 16:01:33 +08:00",
        "url": "https://www.travel.taipei/zh-tw/attraction/details/2375",
        "category": [
          {
            "id": 19,
            "name": "親子共遊"
          }
        ],
        "target": [],
        "service": [],
        "friendly": [],
        "images": [
          {
            "src": "https://www.travel.taipei/image/192862",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/192863",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/192864",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/192865",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/192866",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/192867",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/192868",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/192860",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/192861",
            "subject": "",
            "ext": ".jpg"
          }
        ],
        "files": [],
        "links": []
      },
      {
        "id": 425,
        "name": "大臺北都會公園_幸福水漾公園",
        "name_zh": null,
        "open_status": 1,
        "introduction": "\r\n雙北市都有好多美美的生態公園，公園佔地廣，景觀也好，很適合全家出遊亦是平日健身運動好去處，騎自行車也很適合。\r\n\r\n&nbsp;\r\n\r\n「大臺北都會公園」整區內含數座公園及棒球場、運動場等設施。\r\n\r\n&nbsp;\r\n\r\n以公園為例，內有疏洪運動公園、疏洪荷花公園、疏洪親水公園、疏洪中央公園、疏洪追風公園、疏洪沼澤公園&hellip;等。\r\n\r\n&nbsp;\r\n\r\n其中最令眾人喜愛的，即是佔地24公頃的「幸福水漾公園」，內有數十個以「幸福」為主題的裝置藝術，也是許多攝影師及拍攝婚紗照的免費夢幻景點哦！\r\n\r\n\r\n\r\n\r\n\r\n每當春天到來，公園內的花朵便開始盛開，吸引許多新人來這取景，真的是幸福浪漫的好地方呢~歡迎市民朋友有空一起來踏青哦！\r\n\r\n\r\n\r\n\r\n公園內溪流從中流竄，營造出親水的空間，不同的花卉呈現出不同的風情，令人感到無比幸福甜蜜。\r\n&nbsp;\r\n\r\n如果天氣好的話，藍天白雲加上綠地，非常適合拍照。到了晚上的時候有城市的燈光點綴那氣氛更是迷人。\r\n\r\n&nbsp;\r\n\r\n\r\n\r\n\r\n二重環狀自行車道：\r\n\r\n擁有全臺最長環狀自行車道，環繞一圈長約20公里，佔地共約 424 公頃，相當於16座臺北市大安森林公園，其「大臺北都會公園」橫跨三重、五股、蘆洲、新莊。\r\n\r\n&nbsp;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n騎乘方向：\r\n\r\n疏洪運動公園&rarr;疏洪荷花公園&rarr;疏洪親水公園&rarr;疏洪中央公園&rarr;疏洪追風公園&rarr;疏洪沼澤公園&rarr;疏洪圳邊公園&rarr;疏洪蘆堤公園&rarr;微風運河&rarr;疏洪生態公園&rarr;淡水河畔公園&rarr;疏洪運動公園\r\n\r\n\r\n\r\n\r\n這些色彩豐富的裝置藝術，更是增添許多浪漫氛圍。\r\n\r\n\r\n\r\n公園內綠油油的草地，看了就讓人想躺在草地上看藍天，享受大自然的擁抱！\r\n\r\n真的是很棒的闔家出遊好地方！\r\n\r\n&nbsp;\r\n\r\n\r\n\r\n\r\n\r\n攝影師：高讚賢\r\n\r\n",
        "open_time": "全天開放",
        "zipcode": "241",
        "distric": "三重區",
        "address": "241 新北市三重區疏洪16路",
        "tel": "+886-2-89699596",
        "fax": "",
        "email": "",
        "months": "01,07,02,08,03,09,04,10,05,11,06,12",
        "nlat": 25.06062,
        "elong": 121.47858,
        "official_site": "",
        "facebook": "",
        "ticket": "",
        "remind": "",
        "staytime": "",
        "modified": "2022-12-05 16:01:32 +08:00",
        "url": "https://www.travel.taipei/zh-tw/attraction/details/425",
        "category": [
          {
            "id": 20,
            "name": "北北基景點"
          }
        ],
        "target": [],
        "service": [],
        "friendly": [],
        "images": [
          {
            "src": "https://www.travel.taipei/image/66127",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/66128",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/66132",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/66134",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/66135",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/66140",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/66141",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/66142",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/66143",
            "subject": "",
            "ext": ".jpg"
          }
        ],
        "files": [],
        "links": []
      },
      {
        "id": 2217,
        "name": "中央藝文公園_華山大草原遊戲場",
        "name_zh": null,
        "open_status": 1,
        "introduction": "華山大草原遊戲場從入口處的火車造型牆作為開端，遊戲場以鐵軌和火車隧道等意象串連而成。其中，火車隧道的2個牆面，一面為舉辦工作坊時孩童留下的夢想泡泡，一面為華山車站歷史的展現。遊戲場中最具代表性的是結合山坡地景綠樹中的「煙囪遊戲塔」，其煙囪外型與華山酒廠大煙囪呼應，利用高低層次的遊戲塔，創造不同的遊戲高度體驗，場內更設有「水沙世界」、「極限滑索」、「飛天鞦韆」、「大坡面溜滑梯」等設施環繞，提供多樣的機能與挑戰。延伸至遊戲場的大草坪，讓孩童能發揮自我的想像空間，進行更多元的遊戲行為。",
        "open_time": "開放空間",
        "zipcode": "100",
        "distric": "中正區",
        "address": "100 臺北市中正區北平東路30號前",
        "tel": "+886-2-23032451",
        "fax": "",
        "email": "",
        "months": "01,07,02,08,03,09,04,10,05,11,06,12",
        "nlat": 25.04612,
        "elong": 121.52683,
        "official_site": "https://play4u.gov.taipei/News_Content.aspx?n=4773608F226124D4&sms=7B56BA5392EB632C&s=6A692C83A2717DA3",
        "facebook": "",
        "ticket": "",
        "remind": "",
        "staytime": "",
        "modified": "2022-12-05 16:01:30 +08:00",
        "url": "https://www.travel.taipei/zh-tw/attraction/details/2217",
        "category": [
          {
            "id": 16,
            "name": "戶外踏青"
          }
        ],
        "target": [
          {
            "id": 61,
            "name": "親子共學"
          }
        ],
        "service": [],
        "friendly": [],
        "images": [
          {
            "src": "https://www.travel.taipei/image/182869",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182870",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182871",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182872",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182874",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182875",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182876",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182877",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182878",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182879",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182880",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182881",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182867",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/182868",
            "subject": "",
            "ext": ".jpg"
          }
        ],
        "files": [],
        "links": []
      },
      {
        "id": 368,
        "name": "臺北市政府消防局防災科學教育館",
        "name_zh": null,
        "open_status": 1,
        "introduction": "有鑑於日本於1995年1月17日發生芮氏規模7.2的阪神大地震，死亡6,430人，受傷4萬餘人，房屋全倒、半倒達51萬餘棟，包括公共設施等損失大約在10兆日圓左右，是日本戰後僅次於伊勢灣颱風，所遭受的第二大天然災害。爰此於同年（84年）7月10日，臺北市政府消防局改制成立，為提昇市民防災教育讓市民同胞體驗災害，進而了解防災的重要性，著手規劃設置臺灣第一座防災科學教育館。\r\n\r\n為了讓市民了解各種災害的歷史及特質，臺北市政府消防局防災科學教育以電腦、電子、機械設備，模擬各種災害發生狀況，供市民實地操作體驗，使防火、防洪、防震、防颱等緊急避難知能，自然地融入日常生活中，以「寓教於樂」方式，提昇市民災害應變能力。\r\n\r\n期盼於參觀體驗後，能將獲得之防災知識與技能，轉述親朋好友知道，俾讓大家與災害絕緣，遠離災害威脅。\r\n&nbsp;",
        "open_time": "開館時間(週一休館)：每日上午09:00~12:00\r\n下午02:00~05:00\r\n",
        "zipcode": "114",
        "distric": "內湖區",
        "address": "114 臺北市內湖區成功路二段376號",
        "tel": "+886-2-27919786、+886-2-27919780",
        "fax": "+886-2-27919546",
        "email": "",
        "months": "01,07,02,08,03,09,04,10,05,11,06,12",
        "nlat": 25.06935,
        "elong": 121.59027,
        "official_site": "https://fsm.119.gov.taipei/about.asp",
        "facebook": "",
        "ticket": "免費參觀，為維護參觀品質，請依導覽人員指引參觀。",
        "remind": "1. 請勿攜寵物、違禁物或危險物品入館。\r\n2. 館內禁止抽煙、進食、喧嘩、奔跑，並應穿著整齊入場。\r\n3. 參觀民眾如破壞設備者，應負責賠償。\r\n4. 四歲以下兒童不適合動態體驗，僅提供靜態參觀。",
        "staytime": "",
        "modified": "2022-12-05 16:01:28 +08:00",
        "url": "https://www.travel.taipei/zh-tw/attraction/details/368",
        "category": [
          {
            "id": 19,
            "name": "親子共遊"
          }
        ],
        "target": [
          {
            "id": 61,
            "name": "親子共學"
          },
          {
            "id": 62,
            "name": "校外教學"
          }
        ],
        "service": [
          {
            "id": 146,
            "name": "公廁"
          }
        ],
        "friendly": [],
        "images": [
          {
            "src": "https://www.travel.taipei/image/89518",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89519",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89520",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89522",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89523",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89524",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89525",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89526",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89515",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89516",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89517",
            "subject": "",
            "ext": ".jpg"
          }
        ],
        "files": [],
        "links": []
      },
      {
        "id": 192,
        "name": "行天宮北投分宮_忠義廟",
        "name_zh": null,
        "open_status": 1,
        "introduction": "行天宮北投分宮，俗稱「忠義廟」，主祀關聖帝君，位於臺北市北投區中央北路4段18巷50號，係臺北市民權東路上香火鼎盛行天宮的分宮，但建廟歷史卻比臺北本宮更早，原臺鐵「忠義站」及現在捷運「忠義站」之站名，即因位置鄰近「忠義廟」而得名。\r\n▲圖片來源：臺北市政府觀光傳播局\r\n\r\n「關帝廟行天宮」，此為昔日信眾所熟知的「九台街恩主公廟」，原位於今日臺北市中山區新興國中附近。「關帝廟行天宮」香火鼎盛，後來因廟地被劃歸為學校用地，廟方不得不積極另覓廟址準備搬遷，結果於民國45年在北投嗄嘮別(今忠義山)尋獲建廟吉地。由行天宮三宮建設人-玄空師父挹注資金建設，並於民國54年5月31日慶成，展現出三殿式的大廟格局。\r\n▲圖片來源：臺北市政府觀光傳播局\r\n\r\n北投行天宮廟區範圍約8公頃，廟殿建築雄偉，除附設圖書館外，區內花木扶疏、自然生態豐富，步道、庭園造景、休憩涼亭、停車場及公廁等設施規劃完善，且為市政府規劃之忠義山親山步道之起點。\r\n▲圖片來源：臺北市政府觀光傳播局\r\n\r\n從山下順著階梯而上，首先映入眼簾的是一大片綠油油的青草地，庭園造景及椰林大道；再拾階往上，穿過日、月門，方才來到北投分宮開闊的前殿。\r\n▲圖片來源：臺北市政府觀光傳播局\r\n\r\n廟埕十分寬敞，紅牆與灰色的石板地，在藍天下交織出一片祥和的氛圍。穿過山門，放眼看到典雅的玉皇殿及鐘鼓樓，展現的是莊麗的建築之美。\r\n▲圖片來源：臺北市政府觀光傳播局\r\n\r\n在參拜玉皇殿、後殿及三元殿之後，轉往後山方向，更可感受到寧靜的自然之美。漫步在林木蒼鬱的幽徑，或仰望綿密的修竹，或凝視歷盡滄桑的奇岩，益發覺得景緻清幽。再從右側的八百階登高，更可遠眺關渡平原和淡水河，視野相當遼闊又舒暢，是北淡線旅遊踏青、沉澱心靈的最佳景點。",
        "open_time": "04:00~20:00",
        "zipcode": "112",
        "distric": "北投區",
        "address": "112 臺北市北投區中央北路4段18巷50號",
        "tel": "+886-2-28912731",
        "fax": "",
        "email": "",
        "months": "01,07,02,08,03,09,04,10,05,11,06,12",
        "nlat": 25.13701,
        "elong": 121.47757,
        "official_site": "https://www.ht.org.tw/?fbclid=IwAR1cdOdl0edaaLuldK3KdzhkZGJkk3x0k8MlbbXx4bmMDsy5IFFVDxT74Dk",
        "facebook": "https://www.facebook.com/%E5%8C%97%E6%8A%95%E8%A1%8C%E5%A4%A9%E5%AE%AE-197874520240277/",
        "ticket": "",
        "remind": "行天宮自103年8月26日起不再設置大香爐和供桌，鼓勵信眾不燒香、不備供品，用手敬拜、用心敬神。",
        "staytime": "",
        "modified": "2022-12-05 16:01:26 +08:00",
        "url": "https://www.travel.taipei/zh-tw/attraction/details/192",
        "category": [
          {
            "id": 14,
            "name": "宗教信仰"
          }
        ],
        "target": [
          {
            "id": 61,
            "name": "親子共學"
          }
        ],
        "service": [
          {
            "id": 146,
            "name": "公廁"
          }
        ],
        "friendly": [],
        "images": [
          {
            "src": "https://www.travel.taipei/image/292476",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/292477",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/292478",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/292479",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/292480",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/292481",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/292483",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/292484",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/292485",
            "subject": "",
            "ext": ".jpg"
          }
        ],
        "files": [],
        "links": []
      },
      {
        "id": 258,
        "name": "撫臺街洋樓",
        "name_zh": null,
        "open_status": 1,
        "introduction": "撫臺街洋樓位在北門郵局對面，是座兩層樓石木混合構造建築，整體裝飾簡潔而不複雜，質樸中不失細緻，深受歐陸古典風格的影響。\r\n\r\n建物的一樓以厚重石材疊砌建造，形成典雅騎樓式拱廊，拱廊為四柱三間，拱圈是梯形唭哩岸石塊組合成，騎樓天花板則有木材拼組成的圖案。二樓及屋架均為木造，覆以複折式屋頂，面鋪石棉瓦片，外觀特色為立面上有陡斜屋頂與老虎窗及石造拱廊柱，屬仿文藝復興式樣的建築，也是碩果僅存的日據時期獨棟洋樓店鋪。",
        "open_time": "週一至週六 10:00-18:00 (週日休館)\r\n※詳細開館時間請至官方網站查詢。",
        "zipcode": "100",
        "distric": "中正區",
        "address": "100 臺北市中正區延平南路26號",
        "tel": "+886-2-23148080",
        "fax": "",
        "email": "",
        "months": "01,07,02,08,03,09,04,10,05,11,06,12",
        "nlat": 25.04671,
        "elong": 121.51081,
        "official_site": "",
        "facebook": "https://www.facebook.com/futai1910",
        "ticket": "",
        "remind": "",
        "staytime": "",
        "modified": "2022-12-05 16:01:24 +08:00",
        "url": "https://www.travel.taipei/zh-tw/attraction/details/258",
        "category": [
          {
            "id": 13,
            "name": "歷史建築"
          },
          {
            "id": 15,
            "name": "藝文館所"
          }
        ],
        "target": [
          {
            "id": 61,
            "name": "親子共學"
          },
          {
            "id": 62,
            "name": "校外教學"
          }
        ],
        "service": [],
        "friendly": [],
        "images": [
          {
            "src": "https://www.travel.taipei/image/89478",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89479",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89480",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89481",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89482",
            "subject": "",
            "ext": ".jpg"
          },
          {
            "src": "https://www.travel.taipei/image/89483",
            "subject": "",
            "ext": ".jpg"
          }
        ],
        "files": [],
        "links": []
      }
    ]
  };

}
