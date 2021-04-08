window.onload = function () {
    // loadJSON('../resources/menu.json',
    //     function (data) { console.log(data); },
    //     function (xhr) { console.error(xhr); }
    // );

    initMenu();
}

function initMenu() {
    let menuCard = document.getElementById("menuCard").innerHTML;
    
}

function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

var menu = {
    "coffee" : [
        { "name": "에스프레소", "price": "2000", "img": "에스프레소.png" },
        { "name": "아메리카노", "price": "2000", "img": "커피4.png" },
        { "name": "카푸치노", "price": "3000", "img": "커피4.png" },
        { "name": "카페라떼", "price": "3000", "img": "커피4.png" },
        { "name": "토피넛라떼", "price": "3500", "img": "커피4.png" },
        { "name": "바닐라라떼", "price": "3500", "img": "커피3.png" },
        { "name": "헤이즐넛라떼", "price": "3500", "img": "커피4.png" },
        { "name": "스페니쉬라떼", "price": "3500", "img": "커피1.png" },
        { "name": "카페모카", "price": "3500", "img": "커피2.png" },
        { "name": "화이트모카", "price": "3500", "img": "커피3.png" },
        { "name": "카라멜마끼아또", "price": "3500", "img": "커피2.png" },
        { "name": "민트모카", "price": "3500", "img": "녹차라떼.png" }
    ],
    "non-coffee": [
        { "name": "복숭아아이스티", "price": "2500", "img": "10.png" },
        { "name": "레몬아이스티", "price": "2500", "img": "9.png" },
        { "name": "초코라떼", "price": "3200", "img": "23.png" },
        { "name": "밀크티라떼", "price": "3200", "img": "24.png" },
        { "name": "그린티라떼", "price": "3200", "img": "22.png" },
        { "name": "민트초코라떼", "price": "3200", "img": "21.png" },
        { "name": "블루베리라떼", "price": "3200", "img": "24.png" },
        { "name": "오곡라떼", "price": "3200", "img": "27.png" },
        { "name": "고구마라떼", "price": "3700", "img": "25.png" },
        { "name": "단호박라떼", "price": "3700", "img": "26.png" },
        { "name": "밤라떼", "price": "3700", "img": "27.png" },
        { "name": "우유", "price": "2000", "img": "우유.png" }
    ],
    "tea": [
        { "name": "캐모마일", "price": "2500", "img": "차3.png" },
        { "name": "루이보스", "price": "2500", "img": "차3.png" },
        { "name": "페퍼민트", "price": "2500", "img": "차3.png" },
        { "name": "얼그레이", "price": "2500", "img": "차3.png" },
        { "name": "아쌈", "price": "2500", "img": "차3.png" },
        { "name": "자몽차", "price": "4200", "img": "차2.png" },
        { "name": "레몬차", "price": "4200", "img": "차2.png" },
        { "name": "오렌지차", "price": "4200", "img": "차2.png" },
        { "name": "오린지자몽차", "price": "4200", "img": "차2.png" },
        { "name": "유자차", "price": "3000", "img": "차2.png" },
        { "name": "대추차", "price": "3000", "img": "차1.png" },
        { "name": "생강차", "price": "3000", "img": "차1.png" }
    ],
    "ade": [
        { "name": "레몬에이드", "price": "4500", "img": "레몬.png" },
        { "name": "자몽에이드", "price": "4500", "img": "자몽.png" },
        { "name": "오렌지에이드", "price": "4500", "img": "오렌지.png" },
        { "name": "오렌지자몽에이드", "price": "4500", "img": "자몽.png" },
        { "name": "깔라만시에이드", "price": "3900", "img": "깔라만씨.png" },
        { "name": "청포도에이드", "price": "3900", "img": "청포도.png" },
        { "name": "자두에이드", "price": "3900", "img": "자몽.png" }
    ],
    "smoothie": [
        { "name": "딸기스무디", "price": "3800", "img": "딸기.png" },
        { "name": "블루베리스무디", "price": "3800", "img": "3.png" },
        { "name": "망고스무디", "price": "3800", "img": "망고.png" },
        { "name": "플레인요거트스무디", "price": "3800", "img": "요거트.png" },
        { "name": "딸기요거트스무디", "price": "4200", "img": "딸기.png" },
        { "name": "블루베리요거트스무디", "price": "4200", "img": "3.png" },
        { "name": "망고요거트스무디", "price": "4200", "img": "망고.png" },
        { "name": "복숭아요거트스무디", "price": "4200", "img": "4.png" }
    ],
    "shake": [
        { "name": "자바칩프라페", "price": "4700", "img": "1.png" },
        { "name": "쿠앤크프라페", "price": "4700", "img": "6.png" },
        { "name": "민트초코프라페", "price": "4700", "img": "2.png" },
        { "name": "파스타치오프라페", "price": "4700", "img": "2.png" },
        { "name": "타로버블", "price": "3800", "img": "타로밀크티.png" },
        { "name": "요거트버블", "price": "4300", "img": "14.png" },
        { "name": "그린티버블", "price": "3800", "img": "13.png" },
        { "name": "블루베리버블", "price": "3800", "img": "15.png" },
        { "name": "밀크쉐이크", "price": "5000", "img": "6.png" },
        { "name": "초코쉐이크", "price": "5000", "img": "초코.png" },
        { "name": "딸기쉐이크", "price": "5000", "img": "딸기.png" }
    ],
    "juice": [
        { "name": "딸기주스", "price": "4500", "img": "11.png" },
        { "name": "키위주스", "price": "4500", "img": "8.png" },
        { "name": "토마토주스", "price": "4500", "img": "11.png" },
        { "name": "자몽주스", "price": "4500", "img": "11.png" },
        { "name": "오렌지주스", "price": "4500", "img": "10.png" },
        { "name": "오렌지자몽주스", "price": "4900", "img": "11.png" },
        { "name": "딸기바나나주스", "price": "4500", "img": "11.png" },
        { "name": "키위바나나주스", "price": "4500", "img": "9.png" }
    ],
    "bakery": [
        { "name": "마들렌", "price": "1500", "img": "17.png" },
        { "name": "베이글+크림치즈", "price": "2800", "img": "베이글.png" },
        { "name": "핫도그", "price": "3500", "img": "핫도그.png" },
        { "name": "에그햄치즈 샌드위치", "price": "5000", "img": "16.png" },
        { "name": "베이컨애그 샌드위치", "price": "5500", "img": "16.png" },
        { "name": "닭가슴살 샌드위치", "price": "6000", "img": "16.png" }
    ]
}
