## 1.Storing Objects

You will be given input lines, each holding information about a **student** : **name** , **age** and **grade**. The data come in the format like at the examples below.

Extract that information from the input lines into **JS objects**.

Print the objects in the order of appearance, in format like at the examples below.

### Examples

| **Input** | **Output** |
| --- | --- |
| Pesho -&gt; 13 -&gt; 6.00 <br/> Ivan -&gt; 12 -&gt; 5.57 <br/> Toni -&gt; 13 -&gt; 4.90 | Name: Pesho <br/> Age: 13 <br/> Grade: 6.00 <br/> Name: Ivan <br/> Age: 12 <br/> Grade: 5.57 <br/> Name: Toni <br/> Age: 13 <br/> Grade: 4.90 |

## 2.Parse JSON Objects

You will be given input lines ( **text** ) holding object data in **JSON format**. Use the **JSON.parse(str)** function to parse the data into **JavaScript objects** , and then print them as shown in the examples.

### Examples

| **Input** | **Output** |
| --- | --- |
| {&quot;name&quot;:&quot;Gosho&quot;,&quot;age&quot;:10,&quot;date&quot;:&quot;19/06/2005&quot;} <br/> {&quot;name&quot;:&quot;Tosho&quot;,&quot;age&quot;:11,&quot;date&quot;:&quot;04/04/2005&quot;} | Name: Gosho <br/> Age: 10 <br/> Date: 19/06/2005 <br/> Name: Tosho <br/> Age: 11 <br/> Date: 04/04/2005 |

## 3.Turn Object into JSON String

You will be given input lines holding information about an object in format **key -&gt; value**. Create a **JS object** and save these keys and values in it. After you&#39;ve processed all of the input data, print the **JSON** version of the object. Use the **JSON.stringify(obj)** function.

### Examples

| **Input** | **Output** |
| --- | --- |
| name -&gt; Angel <br/> surname -&gt; Georgiev <br/> age -&gt; 20 <br/> grade -&gt; 6.00 <br/> date -&gt; 23/05/1995 <br/> town -&gt; Sofia | {&quot;name&quot;:&quot;Angel&quot;,&quot;surname&quot;:&quot;Georgiev&quot;,&quot;age&quot;:20,&quot;grade&quot;:6,&quot;date&quot;:&quot;19/05/1995&quot;,&quot;town&quot;:&quot;Sofia&quot;} |
