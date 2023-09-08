const FooterL = () => {
  const date = new Date();

  return (
    <footer className="footer">
      &Xi; MBY _ All rights reserved &nbsp; &copy;&nbsp;
      {date.getFullYear()}
    </footer>
  );
};

export default FooterL;
