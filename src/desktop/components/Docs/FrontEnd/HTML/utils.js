const content = [
    {
        title:'What is HTML?',
        detail:[
            {
                type:'textContent',
                intoHtml:false,
                content:'HTML or Hypertext Markup Language is a templating language. \
                Take note that HTML is not a programming language because there is no logic flow here. \
                HTML element tell browser how to display the content.',
            },
            {
                type:'textContent',
                intoHtml:false,
                content:'HTML elements are displayed by tags.'
            },
        ]
    },
    {
        title:'HTML Element Tags',
        detail:[
            {
            type:'textContent',
            intoHtml:false,
            content: 'there are two way of representing Tags:'
            },
            {
                type:'listContent',
                content: ['Starts by open tag <TagName> and close by end tag </TagName>, ex: <p>....</p>, <div>....</div>',
                'single tag by <TagName/>, ex: <hr/>, <br/>']
            }
        ]
    },
    {
        title:'HTML Structure',
        detail:[
            {
            type:'textContent',
            intoHtml:false,
            content: 'Basic Structure of HTML: '
            },
            {
                type:'codeContent',
                content: 
`<!DOCTYPE html>
<html>   
    <head>      
        <title> Title </title>    
    </head>
    <body>
        content goes here
    </body>
</html>`
            },
            {
            type:'textContent',
            intoHtml:true,
            content: '<b>Description:</b> '
            },
            {
                type:'listContent',
                content: ['The <!DOCTYPE html>  declaration defines this document to be HTML5',
                    'The <html> element is the root element of an HTML page',
                   'The <head> element contains meta information about the document',
                    'The <title> element specifies a title for the document',
                    'The <body> element contains the visible page content',
                ]
                },
        ]
    },
    {
        title:'HTML Heading and Paragraph',
        detail:[
            {
            type:'listContent',
            content: ['<h1> to <h6> used for heading where h1 is the most important and h6 is the least important ','<p> used to declare a paragraph']
            },
            {
            type:'exampleContent',
            content: 
`<!DOCTYPE html>
<html>
    <body>
        
    <h1>My First Heading</h1>
    <h2>My Second Heading</h2>
    <h3>My Third Heading</h3>
    <p>My first paragraph.</p>
        
    </body>
</html>`
            },
        ]
    },
    {
        title:'HTML Images',
        detail:[
            {
            type:'listContent',
            content: ['<img src="<imageSourceFIlE>" alt="<alternate Name if Image does not work>" width=<width> height=<height>']
            },
            {
            type:'exampleContent',
            content: 
`<img src="https://beeimg.com/images/h26180623163.jpg" 
    alt="dog picture" 
    width=300 
    height=300
/>`
            },
        ]
    },
    {
        title:'Do not forget the end tag',
        detail:[],
    },


]

export default content