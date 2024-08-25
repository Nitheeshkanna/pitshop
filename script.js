	const menu = document.querySelector('.butt');
	const menulist = document.querySelector('nav ul');
	menu.addEventListener('click',()=>
	{
		menulist.classList.toggle('showmenu')
	})

	let containe=document.querySelector(".container");
	let buts=document.querySelectorAll(".but");

	let imglist=["1","2","3"]

	let index=0;
	buts.forEach((button)=>{
		button.addEventListener("click",()=>
		{
			if (button.classList.contains("but-left"))
			{
				index--;
				if (index < 0) 
				{
					index = imglist.length-1;
				}
				containe.style.background=`url('${imglist[index]}.jpg') top/cover no-repeat`
			}
			else
			{
				index++;
				if (index == imglist.length) 
				{
					index = 0;
				}
				containe.style.background=`url('${imglist[index]}.jpg') top/cover no-repeat`
			}
		})
	})