var spec =
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
    paths: {
        "/api/register/": {    // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {        // Phương thức gửi request: get, post, put, delete
                tags: ["Authentication"],
                summary: "Tạo tài khoản user",
                description: "",
                operationId: "createNewAdminAccount",
                consumes: ["application/json"],    // Loại dữ liệu gửi đi
                produces: ["application/json"],       // Loại dữ liệu trả về
                parameters: [               // Các tham số
                    {
                        "in": "application/json",      // Tham số được gửi lên từ form
                        "name": "fullname",    // Tên tham số
                        "required": "true",    // Tham số là bắt buộc
                        "schema": {
                            "type": "string"   // Loại dữ liệu của tham số là chuỗi
                        },
                        "description": "Họ tên đầy đủ của người dùng"
                    },
                    {
                        "in": "application/json",
                        "name": "password",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "Mật khẩu của người dùng"
                    },
                    {
                        "in": "application/json",
                        "name": "email",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "Email của người dùng"
                    },
                    {
                        "in": "application/json",
                        "name": "username",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "Tên đăng nhập của người dùng"
                    }

                ],
                responses: {
                    200: {
                        description: "status: 200 => Tạo thành công",
                        schema: {
                            $ref: "#/definitions/register200"           // Dữ liệu trả về là đói tượng admin (tham chiếu với phần definitions ở cuối)
                        }
                    },
                    400: {
                        description: "status: 400 => Tạo thất bại",
                        schema: {
                            $ref: "#/definitions/register400"           // Dữ liệu trả về là đói tượng admin (tham chiếu với phần definitions ở cuối)
                        }
                    }
                }
            }
        },
        "/admin/{id}": {
            get: {
                tags: ["admin"],
                summary: "Lấy tài khoản admin theo id",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        "in": "path",
                        "name": "id",
                        "required": "true",
                        "schema": {
                            "type": "integer",
                            "minimum": "1"
                        },
                        "description": "id của tài khoản admin"
                    }
                ]
            },
            put: {
                tags: ["admin"],
                summary: "Đổi mật khẩu tài khoản admin theo id",
                description: "",
                operationId: "changePasswordAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        "in": "path",
                        "name": "id",
                        "required": "true",
                        "schema": {
                            "type": "integer",    // Kiểu tham số là số nguyên
                            "minimum": "1"        // Giá trị thấp nhất là 1
                        },
                        "description": "id của tài khoản admin"
                    },
                    {
                        "in": "formData",
                        "name": "password",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "password mới của tài khoản admin"
                    }
                ],
                responses: {
                    200: {
                        description: "đổi mật khẩu thành công"
                    },
                },
                security: [
                    
                ]
            }
        }
    },
    securityDefinitions: {    // Thông tin về api key sử dụng để thực hiện request
        api_key: {
            type: "apiKey",      // Thuộc loại api key xác thực
            name: "api_key",     // Tên trường chứa api key xác thực
            in: "header",        // API key được để trong phần header của request
        }
    },
    definitions: {            // Thông tin các đối tượng sẽ trả về
        register200: {                 // Tên đối tượng
            type: "object",         // Loại đối tượng là object
            properties: {           // Các thuộc tính của đối tượng
                message: {                  // Tên thuộc tính
                    type: "array",
                    example : "[]"    // Loại dữ liệu là số nguyên
                },
                status: {
                    type: "boolean",
                    example : true     // Loại dữ liệu là chuỗi
                },
                data: {
                    type: "string",
                    example : {
                        _id : "ID user register",
                        username : "username",
                        email : "email"
                    }
                }
            }
        },
        register400: {            
            type: "object",       
            properties: {          
                message: {               
                    type: "array",
                    example : [
                        'ERROR_SAVE'
                    ]   
                },
                status: {
                    type: "boolean",
                    example : false    
                }
            }
        }
    }
};