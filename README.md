# Front-end microframework

<h1>Microframework guide</h1>

<p>Download the project with gti:</p>
<p>
<pre>
  git clone https://github.com/mwxood/empty_project.git
</pre>
</p>

<p>Open the project folder and do instalation:</p>
<p>
<pre>
  npm i
</pre>
</p>

<p>To run wqebpack watchers:</p>
<p>
<pre>
  npm run watch
</pre>
</p>
<p>To build project:</p>
<p>
<pre>npm run build</pre>
</p>

<p>Please make all yyour UI on component way for example make new scss file in src->sass folder </p>

<p>
<pre>navigation.scss</pre>
</p>

<p>After that you can just import your new file on style.scss</p>

<p>
<pre>@import 'navigation';</pre>
</p>

<p>Javascript components in folder src->js make new navigation.js file</p>
<p>in this file make function:</p>
<p>
<pre>
  const navigation = () => {
    //write your code here
  }
  
  export default navigation;
</pre>
</p>

<p>After that just import your new function in index.js</p>

<p>
<pre>
 import form from './navigation'; // import the function
 
 navigation(); // call the function
</pre>
</p>

<p>Project structure</p>
<p><strong>src folder contains all source working files</strong></p>
<p><strong>assets contains all compiled files</strong></p>

<p>Feel free to use this micro framework</p>
<hr>
