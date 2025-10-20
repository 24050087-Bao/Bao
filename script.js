// Sự kiện tải CV (ví dụ tải file PDF)
document.getElementById('downloadBtn').addEventListener('click', () => {
  // Bạn đổi link ở đây thành link thực của CV bạn nhé
  const cvUrl = 'https://example.com/your_cv.pdf'; 

  // Tạo link ẩn và click để tải file
  const a = document.createElement('a');
  a.href = cvUrl;
  a.download = 'CV_NguyenVanA.pdf'; 
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
