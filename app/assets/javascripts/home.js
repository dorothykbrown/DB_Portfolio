//show hide case studies as needed using filters
$("#project-type-selector .li").on("click", function () {
  var $filterButton = $(this);
  $("#project-type-selector .li").removeClass("active");
  $filterButton.addClass("active");
  var $data = $filterButton.parent().parent().find(".filter-items");
  var $filter,$outerFilter;
  if ($filterButton.attr("id") === "filter__All") {
    $data.find('.flip-card-inner').removeClass("project-card-show");
    $data.find('.flip-card-inner').addClass("project-card-hide");

    $filter = $data.find('.flip-card-inner');

    $filter.removeClass("project-card-hide");
    setTimeout(function () { $filter.addClass("project-card-show"); },20 );

  //  $filter.slideDown(800);
  } else {
    $filter = $data.find('.flip-card-inner[data-category=' + $filterButton.attr("data-category") + ']');
    $data.find('.flip-card-inner').removeClass("project-card-show");
    $data.find('.flip-card-inner').addClass("project-card-hide");

    $filter.removeClass("project-card-hide");
    setTimeout(function () { $filter.addClass("project-card-show"); },20 );
  }
});

