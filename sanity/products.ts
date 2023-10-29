import { defineType , defineField } from "sanity";

// title: "Flex Push Button Bomber",
// tag: "$Jakets",
// id: 7,
// price: "$224",
// img: p12,
// category: "male",

export default defineType({
    name:"Products",
    type:"document",
    title:"Products",
    fields:[
        defineField({
            name:'title',
            type:'string',
            title:'Product Title'
        }),
        defineField({
            name:"tag",
            type:"string",
            title:'Product Tag'
        }),
        defineField({
            name:'price',
            type:"string",
            title:"Product Price"
        }),
        defineField({
            name: "category",
            title: 'Product Category',
            type: "string",
        //     to: [
        //   {
        //     type :"Category"
        //    }
        //     ]
        }),

        defineField({
            name:"img",
            type:'image',
            title:"Product Image",
            options: { hotspot: true },
        })



    ]


})