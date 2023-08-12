import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {nameOfCopyBtn} from "../../const/const";

const BtnForCopyingUrl = () => {
  const [textInCopyBtn, setTextInCopyBtn] = useState(nameOfCopyBtn.default);
  const [backgroundCopyBtn, setBackgroundCopyBtn] = useState(null);

  const handleCopyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setTextInCopyBtn(nameOfCopyBtn.copied);
    setBackgroundCopyBtn('green-bckg')
  };

  useEffect(() => {
    if (textInCopyBtn === nameOfCopyBtn.copied) {
      setTimeout(() => {
        setTextInCopyBtn(nameOfCopyBtn.default);
        setBackgroundCopyBtn('')
      }, 2000);

    }
  }, [textInCopyBtn]);

  return (
    <Button
      className={backgroundCopyBtn}
      variant="dark"
      size='sm'
      onClick={handleCopyUrl}
    >
      {textInCopyBtn}
    </Button>
  )
}

export default BtnForCopyingUrl;
