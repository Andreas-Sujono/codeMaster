const content = [
    {
        title:'What is HTML?',
        detail:[
            {
                type:'textContent',
                content:'HTML or Hypertext Markup Language is a templating language. \
                Take note that HTML is not a programming language because there is no logic flow here. \
                HTML element tell browser how to display the content.',
            },
            {
                type:'textContent',
                content:'HTML elements are displayed by tags.'
            },
        ]
    },
    {
        title:'HTML Element Tags',
        detail:[
            {
            type:'textContent',
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
            content: 'Basic Structure of HTML: '
            },
            {
                type:'codeContent',
                content: ['<!DOCTYPE html>','<html>','   <head>','      <title> Title </title>','    </head>',
                '   <body>','       content goes here','   </body>','</html>']
            },
            {
            type:'textContent',
            content: '<b>Description:</b> '
            },
            {
                type:'listContent',
                content: ['The <!DOCTYPE html> declaration defines this document to be HTML5',
                    'The <html> element is the root element of an HTML page',
                   'The <head> element contains meta information about the document',
                    'The <title> element specifies a title for the document',
                    'The <body> element contains the visible page content',
                ]
                },
        ]


        
    },

]

export default content