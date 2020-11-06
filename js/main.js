jQuery(document).ready(function()
{
  "user strict"
  $('#slider-carousel').carouFredSel
  ({
    responsive : true,
    width : '100%',
    circular : true,
    scroll:
    {
          item : 1,
          duration : 500,
          pauseOnOver : true
    },
    auto : true,
    items :
    {
      visible:
      {
        min: 1,
        max: 1
      },
      height: "variable"
    },
    pagination:
    {
      container: ".sliderpager",
      pageAnchorBuilder: false 
    },
  });
});