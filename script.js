function outer()
{
    let span = document.getElementById('item')
    let myvalue = document.getElementById('exampleInputEmail1').value
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(myvalue))
    span.appendChild(li)
}