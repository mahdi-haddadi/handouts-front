import DropDownMenu from "../../../components/dropDown/components/DropDownMenu";
import BtnDropDownMenu from "../../../components/dropDown/components/BtnDropDownMenu";
import DropDown from "../../../components/dropDown/DropDown";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import "./../assets/header.scss";
import UserMenu from "./UserMenu";
import BtnModal from "../../../components/modal/Components/BtnModal";
import InsideModal from "../../../components/modal/Components/InsideModal";
import Modal from "../../../components/modal/Modal";
import { useEffect, useState } from "react";

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header className="header">
      <div className="main d-flex j-c-b a-i-c">
        <div className="menu-user-drop-down">
          <DropDown>
            <BtnDropDownMenu>
              <div className="signin">
                <button>
                  <i className="fa-solid fa-user"></i>
                  user
                </button>
              </div>
            </BtnDropDownMenu>
            <DropDownMenu>
              <UserMenu />
            </DropDownMenu>
          </DropDown>
        </div>
        <div className="logo">
          <h1>مخزن بزرگ جزوه های دانشجویی</h1>
        </div>
        <div className="about-modal">
          <Modal>
            <BtnModal>
              {width > 768 && (
                <div className="about">
                  <button>
                    <i className="fa-solid fa-circle-question"></i>
                    modal
                  </button>
                </div>
              )}
            </BtnModal>
            <InsideModal title="این یک مودال است">
              <p className="px-16 py-8">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </InsideModal>
          </Modal>
        </div>
      </div>
    </header>
  );
};

export default Header;
