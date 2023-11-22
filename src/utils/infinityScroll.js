const [isScrolling, setIsScrolling] = useState(false);

export const handleInfinityScroll = () => {
  if (isScrolling) return;
  const clientHeight = document.documentElement.clientHeight;
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;

  if ((scrollTop + clientHeight) / scrollHeight >= 0.8) {
    setIsScrolling(true); // 스크롤 중 상태로 설정

    setRoundList((prevRoundList) => [...prevRoundList, "결승전"]);

    setIsScrolling(false); // 스크롤 완료 후 상태 변경
  }
};
