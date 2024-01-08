import DoughnutChart from "../Chart/DoughNutChart";
import {
  doughnutChartDataExperience,
  doughnutChartDataTimeSave,
  doughnutChartDataSymptomInvestigationTime,
  doughnutChartDataTimeSaveByAssistant,
  colorLegend,
  colorLegendTime,
  colorLegendTimeSave,
  colorLegendTimeSaveByAssistant,
} from "./graphData";

const DoctorExperienceSurvey = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">
        Symptom Investigation & Diagnosis Survey with doctors
      </h2>
      <p className="mb-4">
        In recent times, the healthcare system has been strained by long queues,
        patient dissatisfaction, and physician overload due to a shortage of
        healthcare providers. In our efforts to comprehend the issue, we engaged
        in discussions with 100 doctors affiliated with prestigious institutions
        like AIIMS. Our objective was to better comprehend the problem and
        explore innovative solutions. The summarized results are presented
        below.
      </p>

      <div className="md:m-12 md:p-4 gap-6 md:bg-black/10  md:rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          How many years of experience do you possess in the field of medicine?
        </h2>
        <div className="flex flex-col md:flex-row  md:gap-44 gap-6">
          <div className=" lg:max-w-md xl:max-w-lg md:max-w-md ">
            <DoughnutChart data={doughnutChartDataExperience} />
          </div>
          <div className="flex items-center md:justify-center">
            <ul>
              {colorLegend.map((item) => (
                <li key={item.label} className="flex items-center mb-2">
                  <span
                    className={`inline-block w-5 h-5 mr-2 ${item.color} rounded-full`}
                  ></span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="md:m-12 md:p-4 gap-6 md:bg-black/10  md:rounded-lg">
        <h2 className="text-2xl font-bold mb-6">
          When a patient visits you, how much time you invest in initial
          investigation / symptom investigation?{" "}
        </h2>
        <div className="flex flex-col md:flex-row  md:gap-44 gap-6">
          <div className=" lg:max-w-md xl:max-w-lg md:max-w-md ">
            <DoughnutChart data={doughnutChartDataSymptomInvestigationTime} />
          </div>
          <div className="flex items-center md:justify-center">
            <ul>
              {colorLegendTime.map((item) => (
                <li key={item.label} className="flex items-center mb-2">
                  <span
                    className={`inline-block w-5 h-5 mr-2 ${item.color} rounded-full`}
                  ></span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="md:m-12 md:p-4 gap-6 md:bg-black/10  md:rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Do you think a junior doctor can save your time if they could have
          performed initial symptom investigation?
        </h2>
        <div className="flex flex-col md:flex-row   md:gap-44 gap-6">
          <div className=" lg:max-w-md xl:max-w-lg md:max-w-md ">
            <DoughnutChart data={doughnutChartDataTimeSave} />
          </div>
          <div className="flex items-center md:justify-center">
            <ul>
              {colorLegendTimeSave.map((item) => (
                <li key={item.label} className="flex items-center mb-2">
                  <span
                    className={`inline-block w-5 h-5 mr-2 ${item.color} rounded-full`}
                  ></span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="md:m-12 md:p-4 gap-6 md:bg-black/10  md:rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          How much time, the assistant can save for each patient (on an
          average)?
        </h2>
        <div className="flex flex-col md:flex-row md:gap-44 gap-6">
          <div className=" lg:max-w-md xl:max-w-lg md:max-w-md ">
            <DoughnutChart data={doughnutChartDataTimeSaveByAssistant} />
          </div>
          <div className="flex items-center md:justify-center">
            <ul>
              {colorLegendTimeSaveByAssistant.map((item) => (
                <li key={item.label} className="flex items-center mb-2">
                  <span
                    className={`inline-block w-5 h-5 mr-2 ${item.color} rounded-full`}
                  ></span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="m-4">
        Motivated by the scenarios, we build a conversational medical assistant
        that aids doctors in conducting thorough symptom investigations and
        making accurate diagnoses. The assistant serves as the initial point of
        contact for patients; it conducts an initial assessment and compiles a
        concise report for the physician. This efficient process saves doctors a
        significant amount of time that can be better utilized elsewhere.
      </p>
    </div>
  );
};

export default DoctorExperienceSurvey;
