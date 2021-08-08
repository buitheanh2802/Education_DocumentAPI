import { definitionResponse,paths } from './docsInitialize';

var initialize =
{
    swagger: "2.0",    // Phiên bản Swagger UI
    info: {
        description:"Các thông tin mô tả về dự án devchallenge và API",
        version: "4.0 PRO",    // Phiên bản API
        title: "Devchallenge Project"
    },
    host: "localhost:4000",    // Server và port deploy API
    basePath: "/",       // Đường dẫn tới API
    tags: [    // Danh sách các nhóm API: admin, users, images,...
        {
            name: "Devchallenge API",                                   // Tên nhóm API
            description: "Các API của devchallenge",    // Mô tả về nhóm API
        },
    ],
    schemes: ["http"],    // Sử dụng scheme gì? HTTP, HTTPS?
    paths: paths,
    definitions: definitionResponse
};

window.initialize = initialize;