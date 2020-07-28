export default function (){
  return{
    red: 255, green:125, blue: 0,
    total:function(){
      return this.red + this.green + this.blue;
    }
  };
};