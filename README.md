# Hướng dẫn cài đặt dự án test-fe

## 1. Clone repository từ GitHub

Đầu tiên, bạn cần tải mã nguồn dự án từ GitHub về máy:

```bash
git clone https://github.com/hieubui2607/test-fe.git
```
Lệnh này sẽ tải toàn bộ mã nguồn về thư mục test-fe trên máy của bạn.

2. Di chuyển vào thư mục dự án
Sau khi clone, bạn cần di chuyển vào thư mục test-fe:

```bash
cd test-fe
```
3. Cài đặt các gói phụ thuộc
Dự án test-fe sử dụng một số thư viện và công cụ bên ngoài. Bạn cần cài đặt chúng bằng cách chạy lệnh sau:

Sử dụng npm:
```bash
npm install
```
Hoặc sử dụng Yarn:
Nếu bạn đã cài đặt Yarn và muốn sử dụng nó thay cho npm, chạy lệnh sau:

```bash
yarn install
```
Lệnh này sẽ cài đặt tất cả các gói cần thiết theo danh sách được liệt kê trong tệp package.json.

4. Cấu hình các biến môi trường (nếu cần)
Nếu dự án yêu cầu cấu hình các biến môi trường như API endpoint, JWT token, v.v., bạn có thể tạo một tệp .env trong thư mục gốc của dự án.

Ví dụ, nếu dự án yêu cầu API URL, bạn có thể thêm dòng sau vào .env:

```bash
REACT_APP_API_URL=https://api.example.com
```
Kiểm tra tài liệu của dự án hoặc tệp .env.example (nếu có) để biết các biến môi trường cần thiết.

5. Khởi động ứng dụng
Khi đã cài đặt xong, bạn có thể khởi động ứng dụng bằng lệnh:

Sử dụng npm:
```bash
npm start
```
Hoặc sử dụng Yarn:
```bash
yarn start
```
Lệnh này sẽ khởi động ứng dụng trên máy chủ phát triển và mặc định sẽ chạy trên http://localhost:3000. Nếu cần thay đổi port, bạn có thể thêm dòng sau vào tệp .env:

```bash
PORT=3001
```
6. Truy cập ứng dụng
Mở trình duyệt và truy cập vào địa chỉ http://localhost:3000 (hoặc port bạn đã cấu hình) để sử dụng ứng dụng.

Vậy là bạn đã hoàn tất quá trình cài đặt và khởi động dự án test-fe ReactJS thành công! Nếu gặp lỗi hoặc vấn đề, hãy kiểm tra lại các bước hoặc kiểm tra phiên bản của Node.js và npm/Yarn có đáp ứng yêu cầu hệ thống hay không.

