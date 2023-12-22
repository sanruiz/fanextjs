import { classNames } from "@/lib/utils";

export default function SVGPetFriendly({
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
            <g clipPath="url(#clip0_265_1765)">
                <path d="M66.9059 43.9442C65.6936 45.1762 64.1592 46.0384 62.4324 46.4323C59.9467 46.9991 57.3167 46.4899 55.216 45.0387C53.1171 43.5874 51.7049 41.3018 51.3458 38.7671C51.3403 38.7281 51.3366 38.691 51.3329 38.6519L50.5185 27.9727C50.4445 27.0008 51.1682 26.1516 52.138 26.0773C53.1078 26.0048 53.9518 26.7295 54.0259 27.7032L54.8365 38.3212C55.0734 39.8821 55.9156 41.233 57.213 42.1305C58.5253 43.0373 60.104 43.3421 61.6569 42.989C63.1542 42.649 64.4184 41.7366 65.2198 40.421C66.0212 39.1053 66.2526 37.5593 65.8713 36.0671L63.5984 27.1421C62.4565 22.66 58.442 19.5308 53.8334 19.5308H38.2567C35.1935 19.5308 34.1163 22.0728 33.7535 24.2061C33.4741 25.8525 32.1896 27.1272 30.559 27.3781C30.5479 27.3781 30.5386 27.3818 30.5275 27.3818L17.4846 29.162C17.1774 29.2121 16.909 29.3794 16.7276 29.6339C16.5518 29.8792 16.4833 30.1747 16.5333 30.4664C17.0274 33.3244 18.3989 35.7196 20.6107 37.589C22.6799 39.3376 25.1989 39.3358 28.3824 39.3376H28.5379C34.3958 39.3376 38.8637 41.0007 41.8158 44.2824C44.5107 47.276 45.2529 50.8884 45.4305 53.1851C46.256 52.9194 47.15 52.7354 48.1143 52.637V47.4897C48.1143 46.9025 48.4048 46.3543 48.8898 46.0254C49.3747 45.6965 49.991 45.6333 50.5333 45.8544C50.711 45.9269 54.9217 47.6811 59.0694 52.9733C61.5588 56.1471 64.3647 61.0845 65.962 68.3185H83.371C74.9441 52.0237 68.2422 45.217 66.9059 43.9479V43.9442Z" fill="#D1DDFF" />
                <path d="M68.9456 41.034C68.9215 41.0136 68.8956 40.995 68.8716 40.9764C69.6267 39.1535 69.7748 37.1448 69.2769 35.1936L67.0041 26.2686C65.4623 20.2219 60.0467 16 53.8316 16H38.2549C34.0757 16 31.0976 18.8449 30.2851 23.6113C30.2611 23.7544 30.1593 23.864 30.0316 23.8882L16.9923 25.6665C16.9831 25.6665 16.972 25.6684 16.9627 25.6702C15.7097 25.8635 14.6122 26.5399 13.8737 27.573C13.1407 28.5951 12.8557 29.8382 13.0686 31.0702C13.7089 34.7681 15.4839 37.8713 18.3453 40.2908C21.3955 42.87 24.9473 42.8644 28.3825 42.8681H28.5379C33.3427 42.8681 36.9241 44.1317 39.184 46.6236C42.3693 50.1375 41.9473 55.0692 41.9436 55.1176C41.9436 55.1343 41.9436 55.1492 41.9418 55.1659C41.7289 55.361 41.5253 55.5654 41.331 55.7809C39.445 57.8882 39.0267 60.4674 38.9563 61.9614L36.9556 63.0671C35.7174 63.7323 33.6555 64.8454 33.6796 67.5305V67.8966C33.6907 69.6935 33.6999 71.9308 35.1788 73.8169C36.8075 75.8944 39.7744 76.9034 44.2535 76.9034C44.3127 76.9034 44.359 76.9034 44.4182 76.896C44.8309 76.8607 46.1321 76.9183 46.6818 77.6226C47.2222 78.3175 47.163 79.7521 46.5133 81.6605C46.1987 82.5822 46.6892 83.5875 47.6072 83.9015C47.796 83.9666 47.9885 83.9963 48.1773 83.9963C48.9083 83.9963 49.5913 83.5354 49.8412 82.8014C50.9258 79.6164 50.7869 77.132 49.4303 75.4168C47.7145 73.2483 44.8439 73.3245 44.1831 73.3728C40.9423 73.3635 38.8434 72.78 37.9439 71.6335C37.2128 70.7025 37.2073 69.3312 37.1999 67.8799V67.4989C37.1943 67.1756 37.1925 66.9433 38.625 66.174C38.6306 66.1703 38.638 66.1666 38.6435 66.1647L41.5734 64.5462C42.1953 64.2024 42.5507 63.5298 42.4748 62.8218C42.4729 62.7939 42.2323 60.0326 43.9684 58.1186C45.1937 56.7658 47.1815 56.0801 49.8745 56.0801C50.8462 56.0801 51.6328 55.2904 51.6328 54.3148V50.5835C55.7676 53.5957 63.7466 61.8852 63.7466 80.9934C63.7466 81.969 64.5332 82.7587 65.5049 82.7587C66.4766 82.7587 67.2632 81.969 67.2632 80.9934C67.2632 77.6411 67.0244 74.6029 66.6135 71.8453H86.2418C86.8507 71.8453 87.417 71.5294 87.7372 71.0091C88.0574 70.4888 88.0871 69.8384 87.815 69.2921C77.4317 48.4224 69.288 41.3258 68.9456 41.034ZM65.9639 68.3166C64.3666 61.0825 61.5607 56.147 59.0713 52.9713C54.9236 47.6809 50.7129 45.9249 50.5352 45.8524C49.9929 45.6313 49.3766 45.6963 48.8917 46.0234C48.4068 46.3523 48.1162 46.9005 48.1162 47.4877V52.635C47.1519 52.7335 46.2579 52.9174 45.4324 53.1831C45.2548 50.8864 44.5107 47.274 41.8177 44.2804C38.8638 40.9987 34.3977 39.3356 28.5398 39.3356H28.3843C25.2008 39.3356 22.6818 39.3356 20.6126 37.587C18.4008 35.7177 17.0294 33.3205 16.5352 30.4644C16.4852 30.1727 16.5537 29.8772 16.7295 29.632C16.9109 29.3774 17.1793 29.212 17.4865 29.16L30.5294 27.3798C30.5405 27.3798 30.5498 27.3761 30.5609 27.3761C32.1915 27.1234 33.4741 25.8486 33.7555 24.2041C34.1182 22.0708 35.1936 19.5288 38.2586 19.5288H53.8353C58.4439 19.5288 62.4584 22.6599 63.6004 27.1401L65.8732 36.0651C66.2526 37.5592 66.0213 39.1052 65.2217 40.419C64.4221 41.7327 63.1562 42.6451 61.6588 42.987C60.106 43.342 58.5272 43.0354 57.2149 42.1285C55.9175 41.231 55.0754 39.8801 54.8385 38.3192L54.0278 27.7013C53.9537 26.7294 53.1098 26.0028 52.1399 26.0753C51.1719 26.1496 50.4464 26.9989 50.5204 27.9707L51.3348 38.6499C51.3385 38.689 51.3422 38.7261 51.3478 38.7652C51.7087 41.2979 53.119 43.5854 55.2179 45.0367C57.3186 46.4879 59.9486 46.9952 62.4343 46.4303C64.1612 46.0364 65.6955 45.1742 66.9078 43.9422C68.246 45.2113 74.9479 52.018 83.373 68.3128H65.9639V68.3166Z" fill="#525252" />
            </g>
            <defs>
                <clipPath id="clip0_265_1765">
                    <rect width="75" height="68" fill="white" transform="translate(13 16)" />
                </clipPath>
            </defs>
        </svg>
    );
}
