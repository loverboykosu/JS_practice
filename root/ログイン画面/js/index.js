"use strict";
let inputIdClass = document.getElementsByClassName('inputId');
let inputPasswordClass = document.getElementsByClassName('inputPassword');
const inputId = document.getElementById('inputId');
const inputPassword= document.getElementById('inputPassword');
const sendButton = document.getElementById('sendButton');

//ID/パスワードを空白にして送信ボタンをクリックした後に、ID/パスワードを入力して送信ボタンを押した時の処理
//エラーメッセージのタグを削除する。
function deleteAlert(input){
    let redClass = input[0].getElementsByClassName('red');
    if(redClass.length > 0){
        redClass[0].remove();
    }
}
//ID/パスワードを空白にして送信ボタンをクリックした際にエラーメッセージを書かじで表示
//redクラスの付与
function inputAlert(input){
    let errorWord = input[0].getElementsByTagName('span');
    let redClass = input[0].getElementsByClassName('red');
    if(redClass.length === 0){
        let pItem = document.createElement('p');
        pItem.classList.add('red');
        pItem.textContent = `Error :  ${errorWord[0].textContent} を入力してください`;
        input[0].appendChild(pItem);
    }
}
//送信ボタンをクリックした際にID/Passwordが空かどうか確認
function inputChecker(){
    //IDが空白の時
    if(inputId.value === ''){
        inputAlert(inputIdClass);
    }else{
        deleteAlert(inputIdClass);
    }
    //パスワードが空白の時
    if(inputPassword.value === ''){
        inputAlert(inputPasswordClass);
    }else{
        deleteAlert(inputPasswordClass);
    }
}

sendButton.addEventListener('click',inputChecker);