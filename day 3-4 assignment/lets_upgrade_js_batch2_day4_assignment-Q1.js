/* Q1.Create a webpage containing an image and three button
    (a)On click of the second button a change in the existing imageto a new image
    (b)On click of the third button change it once again
    (c)On click of the first, the first image should come back
*/

function SecondImage(){
    let si = document.getElementById('SecondImage')
    console.log(si);
    let newsi = "https://www.hcrlaw.com/wp-content/uploads/2018/11/Picture-blog-paten-.jpg";
    si.src = newsi;
}

function thirdImage(){
    let ti = document.getElementById('SecondImage')
    console.log(ti);
    let newti = "https://news.tulane.edu/sites/news/files/032317_comp-science_5904_800_ts.jpg";
    ti.src = newti;
}

function firstImage(){
    let fi = document.getElementById('SecondImage');
    console.log(fi);
    let newfi = 'https://miro.medium.com/max/2400/1*OH0dDfJAGv6aEGFk2zLAxw.jpeg';
    fi.src = newfi;
}