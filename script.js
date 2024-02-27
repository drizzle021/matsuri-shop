function changePreviewImage(img){
    if (img.classList.contains("active")){
        return;
    }
    const parent = img.parentNode.parentNode;

    for(const child of parent.children){
        childImg = child.children[0];
        if(childImg.classList.contains("active")){
            childImg.classList.remove("active");
        }
    }
    img.classList.add("active");
    document.getElementById("largeProductIMG").src = img.src;
}