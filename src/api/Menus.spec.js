import Menus from './Menus.js';
import fetchMock from 'fetch-mock';
import Code from 'code';
import Api from './Api.js';

const expect = Code.expect;

describe('Menu API',function(){

  describe('Get all',function(){
    it("Should get all menus",function () {
      var menus = new Menus();
      fetchMock.get(Api.host+Api.baseUrl+'/menus',{name:"hello"});
      menus.all('/')
        .then( data => expect(data.name).to.equal("hello"));
      fetchMock.restore();
    });
  });

  describe('Add new menu',function(){
    it("Should add a food choice to menu item",function () {
      var menus = new Menus();
      var menuId = 1,menuName="hello",menuDescription = "hello";
      fetchMock.post(Api.host+Api.baseUrl+'/menus',
        {name: menuName,description: menuDescription });
      menus.add({name: menuName,description: menuDescription })
        .then( data => expect(data.name).to.equal("hello"));
      fetchMock.restore();
    });
  });

  describe('Add item',function(){
    it("Should add a food choice to menu item",function () {
      var menus = new Menus();
      var menuId = 1,itemName="hello",itemDescription = "hello";
      fetchMock.post(Api.host+Api.baseUrl+'/menus/' +
        +menuId+'/items',
        {name: itemName,description: itemDescription });
      menus.addItem(menuId,{name: itemName,description: itemDescription })
        .then( data => expect(data.name).to.equal("hello"));
      fetchMock.restore();
    });
  });

  describe('Add food choice to item',function(){
    it("Should add a food choice to menu item",function () {
      var menus = new Menus();
      var menuId = 1,itemId = 1,foodId = 1;
      fetchMock.post(Api.host+Api.baseUrl+'/menus/' +
        +menuId+'/items/'
        +itemId+'/foods',
        {foodsId: foodId });
      menus.addItemChose(menuId,itemId,foodId)
        .then( data => expect(data.name).to.equal("hello"));
      fetchMock.restore();
    });
  });

});