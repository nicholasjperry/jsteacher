export const Tasks = [
    {
        id: 0,
        name:'Variable Assignment',
        place: 'const num1 = 1;',
        difficulty: "Easy",
        directions: <div className="textBox">Javascript is capable of performing math problems, using what are called assignment operators.
            Some of the assignment operators used in Javascript inlclude +, -, * and /. Numbers can be stored in, what are called, variables, and
            mathematical operations can be performed, using what are called functions. For Example: you can subtract variables from other variables  like this:
            <img className="exampleimage" src="/assets/example1.png" alt="image1"/><br />
            <img className="exampleimage" src="/assets/1A.png" alt="image2"/><br/>
            Follow the model above. Underneath num1, create a variable called num2, which stores the number, 2. Then
            create a variable which adds the two numbers together. Be sure to follow the model carefully. Don't forget to log your answer to the console.
        </div>,
        solution:"constnum1=1;constnum2=2;constsum=(num1,num2)=>{returnnum1+num2;};",
        complete:'3'
    },
    {
        id: 1,
        name:'Data Types - Arrays',
        place: 'const fruits = ["Apple","Banana",Lemon];',
        difficulty: "Easy",
        directions: <div className="textBox">In javascript, you can store lists of data in, what's called an array. Arrays are groups of items inside curly brackets separated by commas.
        You can access specific elements in array by including the number, of the order, at which the element appears in the array, enclosed in brackets, as follows.
        <img className="exampleimage" src="/assets/example2.png" alt="image2"/><br /><img className="exampleimage" src="/assets/2A.png" alt="image2"/><br/>
        Notice that by accessing the item with the index of 2, you actually access the third item. This is because the first item in an array has an index of [0].<br />
        Use what you have learned from the example above to log "Will" to the console. Be sure to follow the directions very carefully.</div>,
        solution:"conststudents=[\"Michael\",\"Nick\",\"Will\"];console.log(students[2]);",
        complete:"Will"
    },
    {
        id: 2,
        name:'Arrays -Methods',
        place: 'const myGear = ["keyboard", "mouse", "monitor", "speakers"];',
        difficulty: "Easy",
        directions: <div className="textBox"> You can use javascript to manipulate items in an array. Using the javascript method pop, you can delete the last item in the array index.
            Using the push method, You can add an item to the end of the array. For instance: <img className="exampleimage" src="/assets/example3.png" alt = "image3" /><br />
            <img className="exampleimage" src="/assets/3A.png" alt="image2"/><br/>
            Following the model above, remove "speakers" and add "headphones"  </div>,
        solution:"constmyGear=[\"keyboard\",\"mouse\",\"monitor\",\"speakers\"];myGear.pop();myGear.push(\"headphones\");console.log(myGear);",
        complete:"[\"keyboard\", \"mouse\", \"monitor\", \"speakers\"]"
    }
];