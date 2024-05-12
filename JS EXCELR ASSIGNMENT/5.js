document.addEventListener('DOMContentLoaded', (event) => {
   
    //to start the drag action
    function handleDragStart(e)
    {
    this.style.opacity = '0.4';
    dragcontent= this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    }


    //to end the drag action
    function handleDragEnd(e)
    {
    this.style.opacity = '1';
    
    items.forEach(function (item) {
    item.classList.remove('over');
    }); 
    }

    //to acknowledge that the source data has entered into the target data
    function handleDragEnter(e) {
    this.classList.add('over');
    }

    //to acknowledge that the source data is leaving the target data
    function handleDragLeave(e) {
    this.classList.remove('over');
    }

    // to indicate the drag is over
    function handleDragOver(e)
    {
    e.preventDefault();
    return false;
    }

    //to perform the actual drop action
    function handleDrop(e) {
    e.stopPropagation();// used to stop any parent element event from getting executed
    if (dragcontent!== this) {
    dragcontent.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
    this.style.backgroundColor='orange';
    }
    return false;
    }
    
    let items=document.querySelectorAll('td')
    items.forEach(function(item) {
    
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
    });
});