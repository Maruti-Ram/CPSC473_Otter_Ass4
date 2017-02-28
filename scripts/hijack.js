var a_link = document.getElementsByTagName('a');
for(var i = 0; i < a_link.length; i++)
{
    a_link[i].href='#';
    a_link[i].onclick = function(){
        return false;
    };
}
