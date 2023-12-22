import { classNames } from "@/lib/utils";

export default function SVGBeautyBarber({
    width,
    height,
    className,
    ...props
}: {
    width?: number | string;
    height?: number | string;
    className?: string;
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 115 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            className={classNames("icon ease-in-out duration-700", className || "")}>
            <g clipPath="url(#clip0_268_1779)">
                <path d="M19.6339 28.8623V32.0512L37.6281 50.0912V40.1601L26.359 28.8623H19.6339Z" fill="#D1DDFF" />
                <path d="M30.2669 28.8623L37.5373 36.1512V28.8623H30.2669Z" fill="white" />
                <path d="M28.631 88.1755C32.2662 88.1755 35.3561 85.4422 35.9014 81.98H21.3606C21.9968 85.5333 24.9958 88.1755 28.631 88.1755Z" fill="#D1DDFF" />
                <path d="M17.3619 74.0532C15.9987 74.0532 14.8173 75.1466 14.8173 76.6043C14.8173 77.971 15.9079 79.1554 17.3619 79.1554H39.9002C41.2634 79.1554 42.4448 77.971 42.4448 76.6043C42.4448 75.2377 41.3542 74.0532 39.9002 74.0532H17.3619Z" fill="white" />
                <path d="M28.631 11.8242C24.9958 11.8242 21.9059 14.5576 21.3606 18.0198H35.9014C35.2653 14.4664 32.2662 11.8242 28.631 11.8242Z" fill="#D1DDFF" />
                <path d="M19.6339 59.8398L30.903 71.1376H37.6281V67.9487L19.6339 49.9087V59.8398Z" fill="#D1DDFF" />
                <path d="M42.4448 23.3953C42.4448 22.0287 41.3542 20.8442 39.9002 20.8442H17.3619C15.9987 20.8442 14.8173 21.9376 14.8173 23.3953C14.8173 24.8531 15.9987 26.0376 17.3619 25.9465H39.9002C41.2634 25.9465 42.4448 24.762 42.4448 23.3953Z" fill="white" />
                <path d="M19.6339 45.9001L37.6281 64.0312V54.1001L19.6339 36.0601V45.9001Z" fill="white" />
                <path d="M26.9952 71.138L19.7248 63.8491V71.138H26.9952Z" fill="white" />
                <path d="M45.2621 23.3956C45.2621 20.3889 42.8083 18.02 39.9002 18.02H38.7187C38.1734 12.9178 33.8112 9 28.631 9C23.4509 9 19.0886 12.9178 18.5434 18.02H17.3619C14.3629 18.02 12 20.48 12 23.3956C12 26.3111 14.0902 28.4978 16.8166 28.7711V71.2289C14.0902 71.5022 12 73.78 12 76.6044C12 79.6111 14.4538 81.98 17.3619 81.98H18.5434C19.0886 87.0822 23.4509 91 28.631 91C33.8112 91 38.1734 87.0822 38.7187 81.98H39.9002C42.8992 81.98 45.2621 79.52 45.2621 76.6044C45.2621 73.6889 43.1718 71.5022 40.4454 71.2289V28.7711C43.1718 28.4978 45.2621 26.22 45.2621 23.3956ZM28.631 11.8244C32.2662 11.8244 35.2653 14.4667 35.9014 18.02H21.3606C21.9059 14.5578 24.9958 11.8244 28.631 11.8244ZM28.631 88.1756C24.9958 88.1756 21.9968 85.5333 21.3606 81.98H35.9014C35.3562 85.4422 32.2662 88.1756 28.631 88.1756ZM42.4448 76.6044C42.4448 77.9711 41.2633 79.1556 39.9002 79.1556H17.3619C15.9078 79.1556 14.8173 77.9711 14.8173 76.6044C14.8173 75.1467 15.9987 74.0533 17.3619 74.0533H39.9002C41.3542 74.0533 42.4448 75.2378 42.4448 76.6044ZM37.6282 40.16V50.0911L19.6339 32.0511V28.8622H26.359L37.6282 40.16ZM30.2669 28.8622H37.5373V36.1511L30.2669 28.8622ZM37.6282 54.1V64.0311L19.6339 45.9V36.06L37.6282 54.1ZM37.6282 67.9489V71.1378H30.903L19.6339 59.84V49.9089L37.6282 67.9489ZM26.9952 71.1378H19.7248V63.8489L26.9952 71.1378ZM39.9002 25.9467H17.3619C15.9987 26.0378 14.8173 24.8533 14.8173 23.3956C14.8173 21.9378 15.9987 20.8444 17.3619 20.8444H39.9002C41.3542 20.8444 42.4448 22.0289 42.4448 23.3956C42.4448 24.7622 41.2633 25.9467 39.9002 25.9467Z" fill="#525252" />
                <path d="M81.7277 78.2962L72.7273 69.2339L69.923 72.0437L81.7277 78.2962Z" fill="white" />
                <path d="M57.0067 57.414C57.328 57.7361 57.75 57.907 58.2255 57.907C58.701 57.907 59.1229 57.7361 59.4442 57.414C59.7656 57.0919 59.936 56.6688 59.936 56.1921C59.936 55.7154 59.7656 55.2924 59.4442 54.9703C58.7837 54.3081 57.6688 54.3081 57.0083 54.9703C56.3478 55.6325 56.3478 56.7502 57.0083 57.4124L57.0067 57.414Z" fill="white" />
                <path d="M56.9872 80.029C57.6899 80.6977 58.8016 80.6993 59.467 80.0322C59.7932 79.7052 59.9668 79.2757 59.9668 78.7908C59.9668 78.306 59.7948 77.8781 59.467 77.5494C59.1408 77.2224 58.7123 77.0483 58.2287 77.0483C57.7451 77.0483 57.3167 77.2208 56.9905 77.5494C56.3202 78.2214 56.3202 79.3554 56.9872 80.029Z" fill="white" />
                <path d="M66.4436 69.1218C66.4387 69.2454 66.3884 69.3626 66.3008 69.4488L61.7195 74.0418C61.5718 74.1898 61.3446 74.2273 61.158 74.1329L60.6484 73.8775C58.2839 72.6914 55.4958 73.3275 53.8697 75.4247C52.401 77.312 52.4205 80.2927 53.9135 82.2174C54.9635 83.4588 56.3949 84.1925 57.9431 84.2837C59.4816 84.378 61.0152 83.7777 62.1512 82.6404C63.7724 81.0134 64.2041 78.5079 63.2255 76.4042L62.9772 75.9047C62.9431 75.8347 62.9253 75.7599 62.9253 75.6867C62.9253 75.5598 62.9739 75.4345 63.0681 75.3417L81.5621 56.8462L66.5913 65.0901L66.4436 69.1202V69.1218ZM60.921 76.0918C61.6189 76.7914 62.0181 77.7594 62.0181 78.7503C62.0181 79.7183 61.6367 80.6848 60.9713 81.399C60.9681 81.4023 60.9648 81.4055 60.9616 81.4088C60.254 82.1181 59.3047 82.5086 58.2904 82.5086C57.2761 82.5086 56.3267 82.1181 55.6192 81.4088C54.9116 80.6994 54.5221 79.7558 54.5221 78.7503C54.5221 77.7448 54.9116 76.8012 55.6192 76.0918C56.317 75.3922 57.2826 74.9919 58.2709 74.9919C59.2592 74.9919 60.2037 75.3727 60.9226 76.0918H60.921ZM69.5076 67.215C69.5076 67.8267 69.011 68.3262 68.3991 68.3262C67.7873 68.3262 67.2907 67.8283 67.2907 67.215C67.2907 66.6016 67.7873 66.1037 68.3991 66.1037C69.011 66.1037 69.5076 66.6016 69.5076 67.215Z" fill="#D1DDFF" />
                <path d="M53.9703 52.7657C52.3864 54.7278 52.3653 57.5848 53.9184 59.5648C55.5689 61.6457 58.3537 62.2851 60.6906 61.1186L61.1401 60.868C61.3251 60.7655 61.5556 60.7932 61.7098 60.9396L64.5968 63.6616C64.7964 63.3264 65.0772 63.0482 65.4147 62.8595L66.072 62.5032L63.1671 59.5469C63.0259 59.4038 62.9869 59.189 63.0697 59.0068L63.2726 58.548C64.2722 56.4492 63.8389 53.9452 62.2031 52.3036C61.0557 51.2005 59.5189 50.618 57.995 50.7108C56.4111 50.758 54.9506 51.508 53.972 52.7689L53.9703 52.7657ZM60.8724 53.5759C61.5588 54.2641 61.9516 55.2175 61.9516 56.1921C61.9516 57.1666 61.5637 58.0729 60.8318 58.8083C60.1453 59.4965 59.1943 59.8902 58.2222 59.8902C57.2501 59.8902 56.3202 59.516 55.6127 58.8083C54.9165 58.1103 54.5335 57.1813 54.5335 56.1921C54.5335 55.2029 54.9165 54.2739 55.6127 53.5759C56.3089 52.8779 57.242 52.4939 58.2417 52.4939C59.2414 52.4939 60.1745 52.8779 60.8707 53.5759H60.8724Z" fill="white" />
                <path d="M54.5205 78.75C54.5205 79.7555 54.91 80.6992 55.6175 81.4085C56.3251 82.1179 57.2745 82.5084 58.2888 82.5084C59.303 82.5084 60.2524 82.1179 60.96 81.4085C60.9632 81.4053 60.9665 81.402 60.9697 81.3988C61.6351 80.6845 62.0165 79.7197 62.0165 78.75C62.0165 77.7592 61.6172 76.7911 60.9194 76.0915C60.2021 75.3724 59.2852 74.9917 58.2677 74.9917C57.2501 74.9917 56.3137 75.3919 55.6159 76.0915C54.9083 76.8009 54.5189 77.7446 54.5189 78.75H54.5205ZM59.4669 77.5493C59.7931 77.8763 59.9668 78.3059 59.9668 78.7907C59.9668 79.2755 59.7948 79.7034 59.4669 80.0321C58.8032 80.6992 57.6915 80.6975 56.9872 80.0288C56.3202 79.3553 56.3202 78.2213 56.9905 77.5493C57.3167 77.2223 57.7451 77.0482 58.2287 77.0482C58.7123 77.0482 59.1391 77.2207 59.4669 77.5493Z" fill="#525252" />
                <path d="M51.9856 51.1891C50.8658 52.5785 50.2475 54.3552 50.2475 56.1904C50.2475 58.0257 50.8285 59.7161 51.9304 61.1381C54.1196 63.9072 57.7078 64.9355 60.9486 63.7527L64.0385 66.8504L63.9996 68.2838L61.0005 71.2905C57.7224 70.0914 54.131 71.1196 51.9791 73.9099C50.9145 75.2977 50.3514 77.0077 50.3514 78.8527C50.3514 80.6977 50.9502 82.5053 52.0343 83.8508C53.4202 85.6144 55.5899 86.7338 57.8522 86.8444C60.0804 86.8981 62.2858 86.0309 63.9055 84.4609C63.9071 84.4593 63.9087 84.4577 63.912 84.4544C66.0411 82.3198 66.7844 79.0284 65.8107 76.1714L68.0859 73.8904L83.9526 82.2938C84.7868 82.7444 85.767 82.5313 86.3934 81.765C86.3999 81.7585 86.4047 81.7504 86.4096 81.7422C86.6547 81.4038 86.7748 81.0052 86.7748 80.6066C86.7748 80.1022 86.5816 79.5978 86.2084 79.222L74.4881 67.4719L86.2084 55.7219C86.8721 55.0564 86.9598 54.0265 86.4226 53.2179C86.4193 53.213 86.4145 53.2065 86.4112 53.2017C85.8449 52.4207 84.8111 52.188 83.951 52.6517L68.2385 61.2536L65.8107 58.7757C66.7893 55.9171 66.0622 52.6973 63.912 50.4895C62.3216 48.895 60.0901 48.0425 57.7922 48.1531C55.538 48.2605 53.4218 49.3701 51.9888 51.1923L51.9856 51.1891ZM81.7277 78.2963L69.923 72.0421L72.7257 69.2323L81.726 78.2963H81.7277ZM81.5605 56.8461L63.0664 75.3417C62.9723 75.436 62.9236 75.5613 62.9236 75.6866C62.9236 75.7614 62.9399 75.8346 62.9756 75.9046L63.2239 76.4041C64.2041 78.5078 63.7724 81.0133 62.1495 82.6403C61.0135 83.7792 59.4799 84.3779 57.9415 84.2836C56.3933 84.1925 54.9635 83.4587 53.9119 82.2173C52.4189 80.2926 52.3994 77.3119 53.8681 75.4246C55.4942 73.3275 58.2823 72.6913 60.6468 73.8774L61.1563 74.1328C61.343 74.2272 61.5702 74.1898 61.7178 74.0417L66.2992 69.4487C66.3868 69.3609 66.4371 69.2454 66.442 69.1217L66.5897 65.0917L81.5605 56.8477V56.8461ZM62.2015 52.3003C63.8389 53.9419 64.2706 56.4459 63.2709 58.5447L63.0681 59.0035C62.9869 59.1857 63.0259 59.4005 63.1654 59.5436L66.0703 62.4999L65.4131 62.8562C65.0739 63.0449 64.7932 63.3231 64.5952 63.6583L61.7081 60.9363C61.5539 60.7915 61.3235 60.7623 61.1385 60.8648L60.689 61.1153C58.352 62.2819 55.5688 61.6425 53.9168 59.5615C52.3653 57.5815 52.3848 54.7245 53.9687 52.7624C54.9473 51.5015 56.4079 50.7514 57.9918 50.7042C59.5156 50.6115 61.0525 51.1956 62.1998 52.2971L62.2015 52.3003Z" fill="#525252" />
                <path d="M54.5351 56.1923C54.5351 57.1815 54.9181 58.1105 55.6143 58.8085C56.3202 59.5162 57.2225 59.8904 58.2238 59.8904C59.2251 59.8904 60.1469 59.4951 60.8334 58.8085C61.5669 58.0747 61.9532 57.1701 61.9532 56.1923C61.9532 55.2145 61.5588 54.2643 60.874 53.5761C60.1778 52.8781 59.2446 52.4941 58.2449 52.4941C57.2453 52.4941 56.3121 52.8781 55.6159 53.5761C54.9197 54.2741 54.5367 55.2031 54.5367 56.1923H54.5351ZM59.4426 54.9704C59.7639 55.2926 59.9343 55.7156 59.9343 56.1923C59.9343 56.669 59.7639 57.0904 59.4426 57.4141C59.1213 57.7363 58.6993 57.9071 58.2238 57.9071C57.7483 57.9071 57.328 57.7379 57.0051 57.4141C56.3446 56.752 56.3446 55.6342 57.0051 54.972C57.6656 54.3099 58.7805 54.3099 59.441 54.972L59.4426 54.9704Z" fill="#525252" />
                <path d="M67.2924 67.2147C67.2924 67.8265 67.789 68.326 68.4008 68.326C69.0126 68.326 69.5092 67.8281 69.5092 67.2147C69.5092 66.6014 69.0126 66.1035 68.4008 66.1035C67.789 66.1035 67.2924 66.6014 67.2924 67.2147Z" fill="#525252" />
                <path d="M79.7267 17.1691C81.2019 17.0829 82.4239 17.4848 83.3603 18.3699C84.5725 19.5153 85.2412 21.3912 85.2412 23.6527C85.2412 25.9142 84.5742 27.7852 83.3635 28.9322C82.4304 29.8157 81.21 30.2224 79.7397 30.1362C79.7137 30.1362 79.6861 30.1346 79.6602 30.1346C79.308 30.1346 78.9672 30.2696 78.7092 30.5153C78.4333 30.7789 78.2775 31.1449 78.2807 31.5273C78.2807 31.7176 78.2694 31.908 78.2402 32.0951L76.3479 44.7677C76.0525 46.7445 74.2074 48.1128 72.2356 47.8166C71.2797 47.6735 70.4375 47.1659 69.863 46.3865C69.2885 45.6072 69.0515 44.6522 69.1943 43.6939L71.0704 31.1319C71.1272 30.748 71.0217 30.3575 70.7766 30.0565C70.5332 29.7555 70.1729 29.57 69.7867 29.5472L66.9451 29.378V17.9289L79.7251 17.1708L79.7267 17.1691Z" fill="#D1DDFF" />
                <path d="M54.8499 28.6573V18.6464L64.1878 18.0933V29.2121L54.8499 28.6573Z" fill="white" />
                <path d="M52.0911 17.3431V29.9603C52.0911 30.6925 52.6607 31.2977 53.3893 31.3416L68.1184 32.217L66.4663 43.2837C66.2148 44.9725 66.6335 46.6581 67.6461 48.0312C68.6588 49.4044 70.1437 50.2993 71.8282 50.5514C72.1463 50.5986 72.4628 50.623 72.776 50.623C75.8773 50.623 78.6053 48.3436 79.0775 45.1775L80.9146 32.8775C82.5927 32.7197 84.0759 32.064 85.2574 30.9447C87.0263 29.2705 88 26.682 88 23.6541C88 20.6231 87.0247 18.0329 85.2525 16.3587C83.7627 14.9514 81.7958 14.2762 79.5644 14.4096L53.3893 15.9634C52.6607 16.0073 52.0911 16.6126 52.0911 17.3447V17.3431ZM53.4705 17.3431L64.1862 16.7069V16.6467C64.1862 15.8837 64.8045 15.2638 65.5656 15.2638C66.2927 15.2638 66.8867 15.8283 66.9402 16.5426L67.2534 16.5247L79.6439 15.7893C84.1571 15.5208 86.619 19.1197 86.619 23.6525C86.619 28.1804 84.1636 31.7744 79.6602 31.5157C79.6618 31.7728 79.6439 32.0347 79.605 32.2983L77.7127 44.9709C77.3038 47.7075 74.7608 49.5932 72.0311 49.1832C69.3015 48.7732 67.4206 46.2237 67.8295 43.4871L69.7055 30.9251L66.9418 30.7608C66.8996 31.4864 66.3008 32.0624 65.5673 32.0624C64.8337 32.0624 64.1878 31.4425 64.1878 30.6795V30.5981L53.4721 29.962V17.3431H53.4705Z" fill="#525252" />
                <path d="M66.9467 29.3763L69.7883 29.5455C70.1746 29.5683 70.5348 29.7537 70.7783 30.0547C71.0217 30.3557 71.1288 30.7462 71.072 31.1302L69.196 43.6921C69.0532 44.6504 69.2901 45.6071 69.8646 46.3848C70.4391 47.1641 71.2813 47.6717 72.2372 47.8149C74.209 48.111 76.0542 46.7427 76.3495 44.7659L78.2418 32.0933C78.2694 31.9062 78.2823 31.7159 78.2823 31.5255C78.2791 31.1432 78.4349 30.7771 78.7108 30.5135C78.9672 30.2679 79.308 30.1328 79.6618 30.1328C79.6877 30.1328 79.7137 30.1328 79.7413 30.1344C81.2116 30.2207 82.432 29.8139 83.3651 28.9305C84.5758 27.7851 85.2428 25.9092 85.2428 23.6509C85.2428 21.3927 84.5742 19.5151 83.3619 18.3681C82.4255 17.4846 81.2035 17.0812 79.7283 17.1674L66.9483 17.9256V16.6435C66.9483 16.6077 66.9451 16.5735 66.9435 16.5394L67.2567 16.5215L79.6472 15.7861C84.1603 15.5176 86.6222 19.1165 86.6222 23.6493C86.6222 28.1772 84.1668 31.7712 79.6634 31.5125C79.665 31.7696 79.6472 32.0315 79.6082 32.2951L77.716 44.9677C77.307 47.7043 74.764 49.5899 72.0344 49.1799C69.3047 48.7699 67.4238 46.2204 67.8328 43.4839L69.7088 30.9219L66.9451 30.7576C66.9451 30.7299 66.9499 30.7039 66.9499 30.6762V29.373L66.9467 29.3763Z" fill="#525252" />
                <path d="M64.1878 18.0932L54.8499 18.6464V28.6572L64.1878 29.212V30.5966L53.4705 29.9604V17.3432L64.1878 16.707V18.0932Z" fill="#525252" />
                <path d="M66.9467 17.9287V29.3762L65.5673 29.2932V18.0101L66.9467 17.9287Z" fill="#525252" />
                <path d="M65.5673 29.2934L64.1878 29.212V18.0932L65.5673 18.0103V29.2934Z" fill="#525252" />
                <path d="M64.1878 16.6466C64.1878 15.8836 64.8061 15.2637 65.5673 15.2637C66.2943 15.2637 66.8883 15.8282 66.9418 16.5425L64.1878 16.7052V16.645V16.6466Z" fill="#525252" />
                <path d="M65.5673 32.0624C64.8061 32.0624 64.1878 31.4425 64.1878 30.6795V30.5981L66.9418 30.7625C66.8996 31.4881 66.3008 32.0641 65.5673 32.0641V32.0624Z" fill="#525252" />
                <path d="M66.9467 17.9287L65.5673 18.01V16.6466V18.01L64.1878 18.0914V16.7052L66.9418 16.5425C66.9451 16.5766 66.9467 16.6108 66.9467 16.6466V17.9287Z" fill="#525252" />
                <path d="M65.5673 29.2931V30.6793V29.2931L66.9467 29.3744V30.6777C66.9467 30.7053 66.9434 30.733 66.9418 30.759L64.1878 30.5947V29.2085L65.5673 29.2898V29.2931Z" fill="#525252" />
            </g>
            <defs>
                <clipPath id="clip0_268_1779">
                    <rect width="76" height="82" fill="white" transform="translate(12 9)" />
                </clipPath>
            </defs>
        </svg>
    );
}