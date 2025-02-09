import Link from "next/link";

export default function CrytocurrencyPrices() {
  return (
    <div className="h-[62px] bg-[#1d2330] box-border border-[1px] text-right border-[#282e3b] border-solid rounded w-full">
      <div className="h-[40px] p-0 m-0 w-full">
        <iframe
          src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=dark&amp;pref_coin_id=1505&amp;invert_hover=no"
          width="100%"
          height="36px"
          allowFullScreen
          loading="lazy"
          className="border-0 m-0 p-0"
        ></iframe>
      </div>
      <div className="text-[#626b7f] w-full py-[2px] px-[6px] font-[sans-serif]">
        <Link
          rel="stylesheet"
          href="https://coinlib.io/"
          className="text-[#626b7f] font-medium text-[11px] no-underline"
        >
          Cryptocurrency Prices
        </Link>
        &nbsp;by Coinlib
      </div>
    </div>
  );
}
