var OriginTitile=document.title,titleTime;document.addEventListener("visibilitychange",function(){document.hidden?($('[rel="icon"]').attr("href","/img/TEP.ico"),document.title=" 你不理我了！",clearTimeout(titleTime)):($('[rel="icon"]').attr("href","/favicon.ico"),document.title=" 石小墨 "+OriginTitile,titleTime=setTimeout(function(){document.title=OriginTitile},2e3))});