function a(){
    console.log('a');
    c();
    console.log('aa');
    
}
function b(){
    console.log('b');
    console.log('bb')
}
function c(){
    console.log('c');
    b();
    console.log('cc');
    
}
function x(){
    console.log('x');
    console.log('xx');
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      a();
      x();
