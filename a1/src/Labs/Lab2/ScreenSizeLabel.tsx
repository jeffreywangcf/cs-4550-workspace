export default function ScreenSizeLabel() {
  return (
    <div id="wd-screen-size-label">
      <div className="block sm:hidden">XS - Extra Small (&lt;576px)</div>
      <div className="hidden sm:block md:hidden">S - Small (≥576px)</div>
      <div className="hidden md:block lg:hidden">M - Medium (≥768px)</div>
      <div className="hidden lg:block xl:hidden">L - Large (≥992px)</div>
      <div className="hidden xl:block 2xl:hidden">
        XL - Extra Large (≥1200px)
      </div>
      <div className="hidden 2xl:block">XXL - Extra Extra Large (≥1400px)</div>
    </div>
  );
}
