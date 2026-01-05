// storage.js - 제안서 저장/불러오기 기능

class ProposalStorage {
    constructor() {
        this.storageKey = 'careerhigh_proposals';
    }

    // 모든 제안서 목록 가져오기
    getAll() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    }

    // 제안서 저장
    save(proposal) {
        const proposals = this.getAll();
        
        // ID 생성 (타임스탬프 기반)
        proposal.id = proposal.id || Date.now().toString();
        proposal.savedAt = new Date().toISOString();
        
        // 동일 ID 제안서 찾기
        const index = proposals.findIndex(p => p.id === proposal.id);
        
        if (index > -1) {
            // 업데이트
            proposals[index] = proposal;
        } else {
            // 새로 추가
            proposals.push(proposal);
        }
        
        localStorage.setItem(this.storageKey, JSON.stringify(proposals));
        return proposal.id;
    }

    // 특정 제안서 가져오기
    get(id) {
        const proposals = this.getAll();
        return proposals.find(p => p.id === id);
    }

    // 제안서 삭제
    delete(id) {
        const proposals = this.getAll();
        const filtered = proposals.filter(p => p.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(filtered));
    }

    // JSON 파일로 내보내기
    exportToJSON(id) {
        const proposal = this.get(id);
        if (!proposal) return;
        
        const dataStr = JSON.stringify(proposal, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `제안서_${proposal.partner_name}_${proposal.date}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
    }

    // JSON 파일에서 가져오기
    importFromJSON(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                try {
                    const proposal = JSON.parse(e.target.result);
                    const id = this.save(proposal);
                    resolve(id);
                } catch (error) {
                    reject(error);
                }
            };
            
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }
}

// 전역 인스턴스
const proposalStorage = new ProposalStorage();
