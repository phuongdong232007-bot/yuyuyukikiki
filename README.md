# BEESO BUDGET

Sổ chi tiêu cute cho sinh viên — HTML / CSS / JS.

## Chạy

Mở `index.html` trong trình duyệt → bấm **Vào sổ BEESO BUDGET**.

## Flow

1. **Enter income / expense** — nhập loại, số tiền, mô tả, ngày  
2. **Auto categorize** — tự gắn thẻ: `salary` · `food` · `transport` · `shopping` · `study` · `others`  
3. **Calculate** — theo Ngày / Tuần / Tháng:

`Balance = Total income − Total expense`

4. **Lời khuyên tiêu dùng** — gợi ý theo tỷ lệ chi tiêu (food / shopping / transport / study…) và số dư  
5. **VI ↔ KO** — nút đổi ngôn ngữ tiếng Việt / tiếng Hàn (lưu trên trình duyệt)

## Trang

| File | Nội dung |
|------|----------|
| `index.html` | Trang giới thiệu (sinh viên tiếng Hàn Truyền thông, 02/03/2007) |
| `budget.html` | Trang sổ chính + chart + lời khuyên |
| `styles.css` | Giao diện pastel xanh dương · vàng · xanh lá |
| `i18n.js` | Bản dịch VI / KO |
| `budget.js` | Logic phân loại, tính số dư, biểu đồ, advice |

Dữ liệu giao dịch & ngôn ngữ lưu trong `localStorage`.
