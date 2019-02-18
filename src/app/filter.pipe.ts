import {Pipe} from '@angular/core';
@Pipe({name:'filter'})
export class FilterArrayPipe{
	transform(value,args)
	{
		console.log("value = "+value+" args = "+args);
		console.log("value[0]['category'] = " + value[0]['category']);
		if(typeof args ==="undefined" || args==="All"){
			return value;
		}
		else if(value){
			return value.filter(item=>{
				//for(let k in item){
					console.log("item = "+item);
					console.log("item['category'] = "+item['category']);
					//console.log("k = "+k);
					//if(k.startsWith(args[0])===true){
					if(item['category'].startsWith(args)===true){
						return true;
					}
				//}
			})
		}
	}
}