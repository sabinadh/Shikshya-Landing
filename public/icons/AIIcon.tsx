export default function AIIcon({
  width,
  height,
  className,
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "32"}
      height={height ? height : "32"}
      viewBox="0 0 33 32"
      fill="none"
      className={className}
    >
      <path
        d="M23.166 2.66699C22.4588 2.66699 21.7805 2.94794 21.2804 3.44804C20.7803 3.94814 20.4993 4.62641 20.4993 5.33366C20.5002 5.80096 20.6238 6.25983 20.8578 6.66432C21.0918 7.06881 21.428 7.4047 21.8327 7.63835V9.33366H17.8327V6.66699L17.8353 4.73991C17.8354 4.5063 17.774 4.27677 17.6575 4.0743C17.541 3.87183 17.3733 3.70354 17.1712 3.58626C16.2156 3.03136 15.1507 2.73316 14.0775 2.69043C13.7197 2.67619 13.3601 2.68926 13.0046 2.7321C11.5822 2.90343 10.2079 3.53133 9.11914 4.62012C8.7808 4.95846 8.50855 5.32843 8.27539 5.71387L8.27279 5.71908C8.18945 5.80294 8.11764 5.89752 8.05925 6.00033C7.24821 7.40446 7.02647 8.98333 7.28581 10.4717C4.8592 11.8405 3.16602 14.3568 3.16602 17.3337C3.16602 19.7601 4.348 21.851 6.05404 23.3128C6.68718 26.7098 9.58933 29.3337 13.166 29.3337C14.6694 29.3337 16.0778 28.8737 17.2415 28.0941C17.4233 27.9723 17.5723 27.8076 17.6754 27.6146C17.7785 27.4215 17.8325 27.2061 17.8327 26.9873V25.3337V22.667H21.8327V24.3597C21.4276 24.5936 21.0912 24.9299 20.8571 25.3349C20.6231 25.7398 20.4997 26.1993 20.4993 26.667C20.4993 27.3742 20.7803 28.0525 21.2804 28.5526C21.7805 29.0527 22.4588 29.3337 23.166 29.3337C23.8733 29.3337 24.5515 29.0527 25.0516 28.5526C25.5517 28.0525 25.8327 27.3742 25.8327 26.667C25.8319 26.1997 25.7082 25.7408 25.4742 25.3363C25.2402 24.9318 24.904 24.596 24.4993 24.3623V21.3337C24.4993 20.98 24.3588 20.6409 24.1088 20.3909C23.8587 20.1408 23.5196 20.0004 23.166 20.0003H17.8327V17.3337H26.1947C26.4283 17.7384 26.7642 18.0745 27.1687 18.3085C27.5732 18.5426 28.0321 18.6662 28.4993 18.667C29.2066 18.667 29.8849 18.386 30.385 17.8859C30.8851 17.3858 31.166 16.7076 31.166 16.0003C31.166 15.2931 30.8851 14.6148 30.385 14.1147C29.8849 13.6146 29.2066 13.3337 28.4993 13.3337C28.0316 13.334 27.5722 13.4574 27.1672 13.6915C26.7622 13.9255 26.4259 14.2619 26.1921 14.667H17.8327V12.0003H23.166C23.5196 12.0003 23.8587 11.8598 24.1088 11.6098C24.3588 11.3597 24.4993 11.0206 24.4993 10.667V7.64095C24.9044 7.40708 25.2409 7.07078 25.4749 6.6658C25.7089 6.26081 25.8323 5.8014 25.8327 5.33366C25.8327 4.62641 25.5517 3.94814 25.0516 3.44804C24.5515 2.94794 23.8733 2.66699 23.166 2.66699ZM13.8014 5.36751C14.2637 5.41298 14.7168 5.58691 15.166 5.75293V6.66699V10.443C15.1422 10.587 15.1422 10.7339 15.166 10.8779V13.193C15.1608 13.2406 15.1582 13.2884 15.1582 13.3363C15.1599 14.507 14.4151 15.4849 13.3848 15.8493C13.0513 15.9671 12.7782 16.2126 12.6256 16.5317C12.4731 16.8508 12.4535 17.2175 12.5713 17.551C12.689 17.8845 12.9344 18.1577 13.2535 18.3103C13.5726 18.4629 13.9392 18.4826 14.2728 18.3649C14.5867 18.2539 14.8825 18.1056 15.166 17.9404V21.1097C15.1422 21.2537 15.1422 21.4006 15.166 21.5446V25.3337V26.0602C14.5451 26.3679 13.9095 26.667 13.166 26.667C10.7612 26.667 8.8322 24.87 8.55925 22.5394C8.53805 22.3577 8.47972 22.1824 8.38788 22.0243C8.29604 21.8661 8.17266 21.7285 8.02539 21.6201C6.69686 20.6436 5.83268 19.1031 5.83268 17.3337C5.83268 15.4776 6.7861 13.8784 8.2181 12.9274C8.4002 13.2127 8.60325 13.4853 8.83008 13.7425C8.94439 13.8788 9.0848 13.9908 9.24306 14.072C9.40132 14.1532 9.57422 14.2019 9.75159 14.2153C9.92895 14.2286 10.1072 14.2064 10.2758 14.1498C10.4445 14.0932 10.6001 14.0035 10.7335 13.8859C10.8669 13.7682 10.9755 13.6251 11.0528 13.4649C11.13 13.3047 11.1745 13.1307 11.1835 12.953C11.1925 12.7754 11.1659 12.5977 11.1052 12.4305C11.0445 12.2634 10.9509 12.11 10.8301 11.9795C10.5186 11.6263 10.2851 11.2214 10.1165 10.792C10.1064 10.7498 10.0943 10.708 10.0801 10.667C9.76761 9.78356 9.76453 8.81972 10.0827 7.94564C10.1044 7.88591 10.1361 7.83001 10.1608 7.77116C10.2174 7.63896 10.2762 7.50635 10.3483 7.37793C10.5222 7.06712 10.7386 6.77154 11.0046 6.50553C11.6638 5.84632 12.485 5.47012 13.3353 5.37012C13.4913 5.35177 13.6473 5.35236 13.8014 5.36751Z"
        fill="white"
      />
    </svg>
  );
}