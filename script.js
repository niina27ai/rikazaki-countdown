document.addEventListener('DOMContentLoaded', function() {
    // ターゲット日時
    const targetDate = new Date('2025-08-02');
    
    // DOM要素を取得
    const countdownText = document.querySelector('.countdown-text');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const reloadButton = document.getElementById('reload');
    const title = document.querySelector('h1');

    if (!countdownText || !daysElement || !hoursElement || !minutesElement || !secondsElement || !reloadButton || !title) {
        console.error('必要なDOM要素が見つかりません');
        return;
    }

    // タイトルの更新
    title.textContent = '里崎ライブ2025カウントダウン';
    
    // カウントダウンテキストのスタイルを設定
    countdownText.style.color = '#333';
    countdownText.style.fontWeight = 'bold';

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference <= 0) {
            countdownText.textContent = '里崎に会えました！';
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            return;
        }

        // 残り時間を計算
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // 表示を更新
        countdownText.textContent = `里崎に会えるまであと${days}日`;
        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }

    // 1秒ごとに更新
    setInterval(updateCountdown, 1000);

    // ボタンのイベントリスナー
    reloadButton.addEventListener('click', updateCountdown);

    // 初回更新
    updateCountdown();
});
