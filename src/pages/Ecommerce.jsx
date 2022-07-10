import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";

const DropDown = ({ currentMode }) => {
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "ID" }}
      style={{ border: "none", color: currentMode === "Dark" && "White" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>;
};

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className="py-24 bg-slate-50 md:py-4 m-2 md:m-10 mt-24 rounded-3xl dark:bg-secondary-dark-bg dark:text-white">
      <div className="flex flex-wrap lg:flex-nowrap justify-evenly drop-shadow-lg">
        <div className="bg-white dark:text-gray-200 dark:bg-card-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">خالص درآمد</p>
              <p className="text-2xl" style={{ color: currentColor }}>
                ۲۳٫۵۶۰٫۳۴۵﷼
              </p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="گزارش گیری"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-card-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center drop-shadow-lg">
        <div className="bg-white dark:text-gray-200 dark:bg-card-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">بازده لحظه ای</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-200 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>مخارج</span>
              </p>
              <p className="flex items-center gap-2 text-gray-200 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>بودجه</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-l-1 border-colo m-4 pl-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">۱۰٫۴۵۰٫۰۰۰﷼</span>
                  <span className="absolute p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 mr-3 text-xs">
                    ۲۳%
                  </span>
                </p>
                <p className="text-gray-500 lt-1 ">بودجه</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">۵٫۱۰۰٫۰۰۰﷼</span>
                  <span className="absolute p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-red-400 mr-3 text-xs">
                    ۱۰%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">مخارج</p>
              </div>
              <div className="mt-5 ">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="گزارش گیری"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div style={{ direction: "ltr" }}>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">درآمد</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">
                  ۱۲۳٫۴۵۶٫۰۰۰﷼
                </p>
                <p className="text-gray-200">بازده ماهیانه</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="column-sparkLine"
                height="100px"
                type="Column"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-card-dark-bg rounded-2xl md:w-400 p-8 m-3  flex justify-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">۴۲۰٫۰۰۰٫۰۰۰﷼</p>
              <p className="text-gray-400">فروش سالیانه</p>
            </div>
            <div className="w-40" style={{ direction: "ltr" }}>
              <Pie
                id="pie-chart"
                data={ecomPieChartData}
                legendVisiblity={false}
                height="160px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 m-4 flex-wrap justify-center drop-shadow-lg">
        <div className="bg-white dark:text-gray-200 dark:bg-card-dark-bg p-5 rounded-2xl box-content">
          <p className="text-xl  font-semibold">تراکنش های اخیر</p>
          <DropDown currentMode={currentMode} />
          <div className="mt-10 w-74 md:w-400">
            {recentTransactions.map((item) => (
              <div
                key={item.title}
                className="flex bg-white w-full p-2 justify-start rounded-xl mt-4 hover:drop-shadow-xl dark:bg-gray-600 cursor-pointer"
              >
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="جدید"
                  borderRadius="10px"
                />
              </div>
              <p className="text-gray-400 text-sm">۳۰ تراکنش اخیر</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-card-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">خلاصه فروش</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto" style={{ direction: "ltr" }}>
            <LineChart />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center ">
        <div className="w-300 md:w-100 bg-white dark:text-gray-200 dark:bg-card-dark-bg rounded-2xl p-6 m-3 drop-shadow-lg">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">وضعیت هفتگی</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            {weeklyStats.map((item) => (
              <div
                key={item.title}
                className="flex justify-between mt-4 w-full"
              >
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ backgroundColor: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold ">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-&{item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="area-sparkLine"
                height="160px"
                width="320px"
                type="Area"
                data={SparklineAreaData}
                color="rgb(242,252,253"
              />
            </div>
          </div>
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-card-dark-bg rounded-2xl p-6 m-3 drop-shadow-lg">
          <div className="flex justify-between">
            <p className="text-xl font-semibold"> وضعیت بازاریابی</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-400"
            >
              <IoIosMore />
            </button>
          </div>
          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
            ۱۴۰۱، خرداد ۲۳
          </p>
          <div className="flex gap-4 border-b-1 border-color mt-6">
            {medicalproBranding.data.map((item) => (
              <div
                key={item.title}
                className="border-r-l1 border-color pr-4 pb-2"
              >
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border-b-1 border-color pb-4 mt-2">
            <p className="text-md font-semibold mb-2">تیم های فروش</p>
            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ backgroundColor: item.color }}
                  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 roundedl-lg text-xs"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md font-semibold mb-2">سوپروایزرهای برتر</p>
            <div className="flex gap-4">
              {medicalproBranding.leaders.map((item, index) => (
                <img
                  key={index}
                  className="rounded-full w-8 h-8"
                  src={item.image}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="جدید"
                borderRadius="10px"
              />
            </div>
            <p className="text-gray-400 text-sm">براساس ۳۰ سفارش اخیر</p>
          </div>
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-card-dark-bg rounded-2xl p-6 m-3 drop-shadow-lg">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">فعالیت های روزانه</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <img className="md:w-96 h-50" src={product9} alt="" />
            <div className="mt-8">
              <p className="font-semibold text-lg">فاز دوم سامانه فروش </p>
              <p className="text-gray-400">مدیرعامل فروشگاه اینترنتی</p>
              <p className="mt-8 text-sm text-gray-400">
                به زودی از فاز دوم سامانه فروش هوشمند فروشگاه های اینترنتی در
                سالن همایشات شهرستان تهران رونمایی خواهد شد.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="بیشتر"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
