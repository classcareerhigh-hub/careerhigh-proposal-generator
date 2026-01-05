// localStorage에서 데이터 가져오기
const data = JSON.parse(localStorage.getItem('proposalData')) || {};

// 숫자 포맷팅
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 데이터 삽입
document.addEventListener('DOMContentLoaded', function() {
    // 표지
    document.getElementById('cover-partner').textContent = `[${data.partner_name || ''}]`;
    document.getElementById('cover-program').textContent = data.program_name || '';
    
    // 목차 및 본문
    document.getElementById('program-name').textContent = data.program_name || '';
    document.getElementById('program-objectives').textContent = data.objectives || '';
    document.getElementById('program-type').textContent = data.program_type === 'online' ? '온라인' : 
                                                           data.program_type === 'offline' ? '오프라인' : '온·오프라인 병행';
    document.getElementById('program-schedule').textContent = data.schedule || '';
    document.getElementById('program-duration').textContent = data.duration || '';
    document.getElementById('partner-name-2').textContent = data.partner_name || '';
    document.getElementById('program-participants').textContent = data.participants || '';
    document.getElementById('mentor-name-1').textContent = data.mentor_name || '';
    document.getElementById('program-price').textContent = data.price ? `${formatNumber(data.price)}원` : '';
    
    // 커리큘럼
    document.getElementById('curriculum-content').textContent = data.curriculum || '';
    
    // 멘토 프로필
    document.getElementById('mentor-name-2').textContent = data.mentor_name || '';
    document.getElementById('mentor-position').textContent = data.mentor_position || '';
    document.getElementById('mentor-career').textContent = data.mentor_career || '';
});

// PDF 다운로드 버튼 (선택사항)
function downloadPDF() {
    window.print();
}
