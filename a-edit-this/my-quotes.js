/**
 * Note: Please scroll to the bottom for more details. The top has been reserved for notes and such.
 *
 * <br> = return
 * <br><br> = paragraph break
 *
 * ** If you're not familar with programming and how that relates to apostrophes, single quotes and double quotes then please use: **
 *
 * - apostrophe = &#39;
 *
 * - left single quote = &lsquo;
 * - right single quote = &rsquo;
 *
 * - left double quote = &ldquo;
 * - right double quote = &rdquo;
 *
 * Other special characters: http://www.degraeve.com/reference/specialcharacters.php
 */
 
var ezMQ = {
  "ezobj":[
  
    {
	  'index'		: 2,
	  'title'		: '',
	  'idea_size'	: 130,
	  'idea'		: "The TEDx Talk I gave that was posted on TED.com continues to spread far and wide not because any social media strategy. It spreads because this message is inherently optimistic. It is inherently human. And those who believe in it share it.",
	  'quotes'		: false,
	  'select'		: 'The TEDx Talk',
	  'who'			: 'Simon Sinek',
	  'note'		: 'Start With Why - Preface',
	  'caption'		: setupCaption
    },
    {
	  'index'		: 2,
	  'title'		: '',
	  'idea_size'	: 155,
	  'idea'		: "It was such a simple, powerful and actionable idea, that I shared it with my friends. That's what we do when we find something of value, we share it with the people we love.",
	  'quotes'		: false,
	  'select'		: 'Value, we share it',
	  'who'			: 'Simon Sinek',
	  'note'		: 'Start With Why - Preface',
	  'caption'		: setupCaption
    },
	// ---------
    {
	  'index'		: 1,
	  'title'		: '', 
	  'idea'		: '<img src="img/cover.jpg" alt="Cover: Start With Why - Simon Sinek">',
	  'quotes'		: false,
	  'select'		: 'Cover: Start With Why - Simon Sinek',
	  'who'			: '',
	  'note'		: '',
	  'caption'		: setupCaption
    }
  ]}
  

  
/**
 *
 * * * * * * * IMPORTANT  * * * * * * * 
 * * * Order is oldest on the bottom, newest on top. 
 * * * This is done so adding a new "page" doesn't require scrolling. Instead just stack it on top.
 *
 *
 * {
 *  'index'			: 1,   				// strictly for internal use. Makes it easier to find a page after the fact. 
 *  'title'			: '', 				// title
 *  'idea'			: '',  				// the main idea, aka the quote
 *	'idea_size'		: 100,				// you can change the font-size of the idea using this. Greater than 100 is larger, smaller than 100 will make the default smaller.
 *  'quotes'		: true, 			// use quotation marks? default value: true. '', false or no 'quote' property will all result in quotes not being applied to the 'idea'
 *  'select'		: '',				// *Short* description to appear in the select that lists the pages
 *  'who'			: '',				// 'who' (or what) said it. basically the first line under / after the quote
 *  'note'			: '',				// 'note' on where, when, why, etc. they said it. and the line under 'who' is some further details is required. 
 *  'caption'		: setupCaption		// setupCaption is the caption defined in js/setup.js, else override it here.
 * },
 *
 */