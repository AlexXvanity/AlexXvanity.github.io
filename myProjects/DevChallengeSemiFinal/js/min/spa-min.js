$(function(){function e(e){var i=e.split("/")[0],n={"":function(){filters={},checkboxes.prop("checked",!1),s(products)},"#product":function(){var i=e.split("#product/")[1].trim();t(i,products)},"#filter":function(){e=e.split("#filter/")[1].trim();try{filters=JSON.parse(e)}catch(i){window.location.hash="#"}a(filters,products)}};n[i]?n[i]():r()}function i(e){}function s(e){}function t(e,i){}function a(e,i){s(results)}function r(){}function n(e){}var c=[{id:1,name:"Sony Xperia Z3",price:899,specs:{manufacturer:"Sony",storage:16,os:"Android",camera:15},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",rating:4,image:{small:"assets/images/sony-xperia-z3.jpg",large:"assets/images/sony-xperia-z3-large.jpg"}},{id:2,name:"Iphone 6",price:899,specs:{manufacturer:"Apple",storage:16,os:"iOS",camera:8},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",rating:4,image:{small:"assets/images/iphone6.jpg",large:"assets/images/iphone6-large.jpg"}},{id:3,name:"HTC One M8",price:899,specs:{manufacturer:"HTC",storage:32,os:"Android",camera:5},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",rating:4,image:{small:"assets/images/htc-one.jpg",large:"assets/images/htc-one-large.jpg"}}];checkboxes.click(function(){n(filters)}),i(c),$(window).trigger("hashchange"),$(window).on("hashchange",function(){e(decodeURI(window.location.hash))})});