[![Netlify Status](https://api.netlify.com/api/v1/badges/f1c6d960-e969-4396-bdaa-33e245a72bf6/deploy-status)](https://app.netlify.com/sites/react-file-view/deploys)&nbsp;[![codecov](https://codecov.io/github/musama619/react-file-view/branch/main/graph/badge.svg?token=iBQkSenXLe)](https://codecov.io/github/musama619/react-file-view)

# react-file-view
A file view component for react.

| Name | Type  |  Default  | Description |
| ------------ | --------- | ------------ | --------- |
| `files` |  File[] | [] | array of file objects   |
|  `url` | string  | null  |  image url |
|  `downloadFile` | boolean  | true  | enables file download |
| `removeFile ` | boolean  | true  | shows file remove icon on file hover  |
|  `showFileSize` | boolean  | true  | shows file size under files  |
|  `showSliderCount` | boolean  | true  | shows slides count under file slider  |
|  `multiple` | boolean  | true |  accepts one or more files |
|  `accept` | string  |   | comma-separated lists of file types. See [MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)  |
| `maxFileSize`  | number  |   |  maximum allowed file size in bytes *e.g. 1024  x 1024 x 5 == 5MB*  |
|  `maxFiles` | number  |   |maximum files allowed to be added   |
|  `width` | string  | basis-11/12   | tailwind css **flex-basis** class https://tailwindcss.com/docs/flex-basis   |
| `height`  | string  |  | tailwind css **height** class https://tailwindcss.com/docs/height  |
| `fileWidth`  |  string  |  w-44 |  tailwind css **width** class https://tailwindcss.com/docs/width |
| `fileHeight`  | string  | h-32 |  tailwind css **height** class https://tailwindcss.com/docs/height |
|  `getFile` | func  |   |  returns all current files  |
| `onChange`  | func  |   | returns selected file(s)  |
| `onRemove`  | func  |   | returns the removed file  |
|  `onError` | func  |   | returns error message as string  |
|  `onClick` | func  |   | returns file on click  |