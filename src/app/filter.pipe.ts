import {Pipe} from '@angular/core';
@Pipe({name:'filter'})
export class FilterArrayPipe{
	transform(value,args)
	{
		console.log("value = "+value+" args = "+args);
		console.log("value[0]['name'] = " + value[0]['name']);
		if(typeof args ==="undefined" || args==="All"){
			return value;
		}
		else if(value){
			return value.filter(item=>{
				//for(let k in item){
					console.log("item = "+item);
					console.log("item['name'] = "+item['name']);
					//console.log("k = "+k);
					//if(k.startsWith(args[0])===true){
					if(item['name'].startsWith(args)===true){
						return true;
					}
				//}
			})
		}
	}
}