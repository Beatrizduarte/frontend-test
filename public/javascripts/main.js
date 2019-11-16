// your code
(function readyJS(win,doc){

    'use strict';

    let btn = doc.querySelector('#btndb');

    function ranking(){
        let ajax = new XMLHttpRequest();
        ajax.open('GET','../fazenda.json');
        ajax.onreadystatechange = () =>{
            if(ajax.status === 200 && ajax.readyState === 4){
                //document.getElementById('render').innerHTML = ajax.responseText;
                let res = JSON.parse(ajax.responseText);
                let farmers = res.data

                function getFullName(item) {
                    let fullname = item.name;
                    console.log(fullname)
                    return fullname;
                }

                function getImg(img){
                    let photo = img.picture;
                    console.log(photo)
                    return photo;
                }

                function getDescription(descri){
                    let descriptions = descri.description;
                    console.log(descriptions)
                    return descriptions;
                }
                
                document.getElementById('name').innerHTML = farmers.map(getFullName);
                document.getElementById('img').innerHTML = farmers.map(getImg);
                document.getElementById('description').innerHTML = farmers.map(getDescription);
                //for(let i=0;i < farmers.length; i++){
                    //console.log(farmers[i].name);
                    //document.getElementById('#render').innerHTML = 
                //}
            }
        }
        ajax.send()
    
    }
    btn.addEventListener('click', ranking, false);

})(window,document);