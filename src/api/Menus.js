import Api from './Api.js'

export default class Menus extends Api {
  constructor(){
    super();
    this.path = '/menus';
  }
  all(){
    return super.get(this.path);
  }

  add(menu){
    return super.add(this.path,menu);
  }

  addItem(menuId,item){
    return super.add(this.path+'/'+menuId+'/items',
      item
    );
  }

  addItemChose(menuId,itemId,foodId){
    return super.add(this.path+'/'+menuId+'/items/'+itemId+'/foods',
      {
        foodsId: foodId
      }
    );
  }

}
