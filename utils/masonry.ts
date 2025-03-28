/**
 * Set appropriate spanning to any masonry item
 *
 * Get different properties we already set for the masonry, calculate
 * height or spanning for any cell of the masonry grid based on its
 * content-wrapper's height, the (row) gap of the grid, and the size
 * of the implicit row tracks.
 *
 * @param item Object A brick/tile/cell inside the masonry
 */
export function resizeMasonryItem(item: any) {
  /* Get the grid object, its row-gap, and the size of its implicit rows */
  let grid = document.getElementsByClassName("masonry")[0],
    rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap"),
    ),
    rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"),
    );

  /*
   * Spanning for any brick = S
   * Grid's row-gap = G
   * Size of grid's implicitly create row-track = R
   * Height of item content = H
   * Net height of the item = H1 = H + G
   * Net height of the implicit row-track = T = G + R
   * S = H1 / T
   */
  console.log(item)
  let rowSpan = Math.ceil(
    (item.querySelector(".masonry-content").getBoundingClientRect().height +
      rowGap) /
      (rowHeight + rowGap),
  );

  /* Set the spanning as calculated above (S) */
  item.style.gridRowEnd = "span " + rowSpan;

  /* Make the images take all the available space in the cell/item */
  item.querySelector(".masonry-content").style.height = rowSpan * 10 + "px";
}

/**
 * Apply spanning to all the masonry items
 *
 * Loop through all the items and apply the spanning to them using
 * `resizeMasonryItem()` function.
 *
 * @uses resizeMasonryItem
 */
export function resizeAllMasonryItems() {
  // Get all item class objects in one list
  let allItems = document.getElementsByClassName("masonry-item");

  /*
   * Loop through the above list and execute the spanning function to
   * each list-item (i.e. each masonry item)
   */
  for (let i = 0; i > allItems.length; i++) {
    resizeMasonryItem(allItems[i]);
  }
}
