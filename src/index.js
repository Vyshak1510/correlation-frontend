import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import ClientMonitor from '@sixthsense/sixthsense-javascript-agent';
import { datadogRum } from '@datadog/browser-rum';
const root = ReactDOM.createRoot(document.getElementById('root'));

// ClientMonitor.register({
//     service: "eComm-React", // Name the app
//     collector: 'https://http-collector-observability.sixthsense.rakuten.com/oap', // Provided by the Onboarding team
//     pagePath: "index.html",
//     serviceVersion: "1.2.1",
//     enableSPA: true,
//     useFmp: true,
//     autoTracePerf: true,
//     detailMode: true,
//     environment: "prod",
//     authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSWQiOiJmOTJmMjFhMC0xNDQ2LTRlNjItOTM4ZS1lZWFhN2UwZTc4NDkiLCJiaWxsaW5nX2lkIjoiMzVhNzBlZDUtZjZmMS00ZGViLTg2YmItYjdhYWFiMmQ1ZDQ3IiwiaWF0IjoxNjQ0MjMwODk2LCJhdWQiOiJvYXAiLCJpc3MiOiJzaXh0aC1zZW5zLWF1dGgifQ.O133bsGRnNMuetwcnFm05hpw9uGbzCTPDP5KJhtA7ok",
//     enableDistributedTracing: true
//   });
//    
//   
// ClientMonitor.setPerformance({
//     service: "eComm-React",
//     collector: 'https://http-collector-observability.sixthsense.rakuten.com/oap',
//     serviceVersion: "1.2.1",
//     perfInterval: 1000,
//     useFmp: true,
//     authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSWQiOiJmOTJmMjFhMC0xNDQ2LTRlNjItOTM4ZS1lZWFhN2UwZTc4NDkiLCJiaWxsaW5nX2lkIjoiMzVhNzBlZDUtZjZmMS00ZGViLTg2YmItYjdhYWFiMmQ1ZDQ3IiwiaWF0IjoxNjQ0MjMwODk2LCJhdWQiOiJvYXAiLCJpc3MiOiJzaXh0aC1zZW5zLWF1dGgifQ.O133bsGRnNMuetwcnFm05hpw9uGbzCTPDP5KJhtA7ok"
//    });

//import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'bb9da337-54bd-4be0-a8b9-797f26c1e103',
    clientToken: 'pub7de0507a41f0b718abcbad8d079f5b0c',
    site: 'datadoghq.com',
    service:'react-backend',
    env:'prod',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
