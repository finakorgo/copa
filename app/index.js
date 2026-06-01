    // javascript files ==^.^== created by Jose Aparecido Finamor ==^.^== 01/06/2026

        // API Configuration
        const API_CONFIG = {
            baseURL: 'https://v3.football.api-sports.io',
            leagueId: 1,
            season: 2026,
            headers: { 'x-apisports-key': '' }
        };
        let apiConnected = false;
        let shareMatchData = null;

        // Teams data
        const teams = {
            'BRA': { name: 'Brasil', flag: '🇧🇷' }, 'ARG': { name: 'Argentina', flag: '🇦🇷' },
            'FRA': { name: 'França', flag: '🇫🇷' }, 'GER': { name: 'Alemanha', flag: '🇩🇪' },
            'ESP': { name: 'Espanha', flag: '🇪🇸' }, 'POR': { name: 'Portugal', flag: '🇵🇹' },
            'ENG': { name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' }, 'NED': { name: 'Holanda', flag: '🇳🇱' },
            'ITA': { name: 'Itália', flag: '🇮🇹' }, 'BEL': { name: 'Bélgica', flag: '🇧🇪' },
            'URU': { name: 'Uruguai', flag: '🇺🇾' }, 'COL': { name: 'Colômbia', flag: '🇨🇴' },
            'MEX': { name: 'México', flag: '🇲🇽' }, 'USA': { name: 'Estados Unidos', flag: '🇺🇸' },
            'JPN': { name: 'Japão', flag: '🇯🇵' }, 'KOR': { name: 'Coreia do Sul', flag: '🇰🇷' },
            'AUS': { name: 'Austrália', flag: '🇦🇺' }, 'CAN': { name: 'Canadá', flag: '🇨🇦' },
            'MAR': { name: 'Marrocos', flag: '🇲🇦' }, 'SEN': { name: 'Senegal', flag: '🇸🇳' },
            'CRO': { name: 'Croácia', flag: '🇭🇷' }, 'DEN': { name: 'Dinamarca', flag: '🇩🇰' },
            'SUI': { name: 'Suíça', flag: '🇨🇭' }, 'POL': { name: 'Polônia', flag: '🇵🇱' },
            'ECU': { name: 'Equador', flag: '🇪🇨' }, 'GHA': { name: 'Gana', flag: '🇬🇭' },
            'IRN': { name: 'Irã', flag: '🇮🇷' }, 'KSA': { name: 'Arábia Saudita', flag: '🇸🇦' },
            'QAT': { name: 'Catar', flag: '🇶🇦' }, 'TUN': { name: 'Tunísia', flag: '🇹🇳' },
            'CMR': { name: 'Camarões', flag: '🇨🇲' }, 'WAL': { name: 'País de Gales', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
            'SRB': { name: 'Sérvia', flag: '🇷🇸' }, 'SWE': { name: 'Suécia', flag: '🇸🇪' },
            'UKR': { name: 'Ucrânia', flag: '🇺🇦' }, 'CHI': { name: 'Chile', flag: '🇨🇱' },
            'PER': { name: 'Peru', flag: '🇵🇪' }, 'PAR': { name: 'Paraguai', flag: '🇵🇾' },
            'BOL': { name: 'Bolívia', flag: '🇧🇴' }, 'VEN': { name: 'Venezuela', flag: '🇻🇪' },
            'JAM': { name: 'Jamaica', flag: '🇯🇲' }, 'HON': { name: 'Honduras', flag: '🇭🇳' },
            'CRC': { name: 'Costa Rica', flag: '🇨🇷' }, 'PAN': { name: 'Panamá', flag: '🇵🇦' },
            'NZL': { name: 'Nova Zelândia', flag: '🇳🇿' }, 'ALG': { name: 'Argélia', flag: '🇩🇿' },
            'EGY': { name: 'Egito', flag: '🇪🇬' }, 'NGA': { name: 'Nigéria', flag: '🇳🇬' },
            'CIV': { name: 'Costa do Marfim', flag: '🇨🇮' }, 'RSA': { name: 'África do Sul', flag: '🇿🇦' }
        };

        // Groups data
        const groups = {
            'A': [{team:'MEX',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'NED',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'SEN',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'ECU',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}],
            'B': [{team:'USA',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'ENG',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'IRN',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'WAL',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}],
            'C': [{team:'ARG',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'FRA',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'KSA',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'JAM',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}],
            'D': [{team:'BRA',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'GER',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'AUS',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'TUN',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}],
            'E': [{team:'ESP',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'BEL',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'KOR',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'CAN',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}],
            'F': [{team:'POR',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'URU',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'JPN',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'GHA',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}],
            'G': [{team:'ITA',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'CRO',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'MAR',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'NZL',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}],
            'H': [{team:'COL',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'DEN',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'SUI',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'QAT',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}],
            'I': [{team:'NED',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'SWE',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'NGA',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'HON',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}],
            'J': [{team:'ENG',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'POL',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'CMR',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'PAN',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}],
            'K': [{team:'FRA',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'SRB',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'EGY',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'CRC',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}],
            'L': [{team:'GER',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'UKR',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'CIV',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},{team:'BOL',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}]
        };

        // Fallback matches
        const fallbackMatches = {
            live: [],
            upcoming: [
                {id:1,home:'MEX',away:'ECU',date:'2026-06-11',time:'16:00',venue:'Estadio Azteca, Cidade do México',group:'A',status:'upcoming',homeScore:null,awayScore:null,minute:null},
                {id:2,home:'USA',away:'WAL',date:'2026-06-11',time:'20:00',venue:'SoFi Stadium, Los Angeles',group:'B',status:'upcoming',homeScore:null,awayScore:null,minute:null},
                {id:3,home:'CAN',away:'NED',date:'2026-06-12',time:'13:00',venue:'BC Place, Vancouver',group:'A',status:'upcoming',homeScore:null,awayScore:null,minute:null},
                {id:4,home:'ARG',away:'JAM',date:'2026-06-12',time:'16:00',venue:'Hard Rock Stadium, Miami',group:'C',status:'upcoming',homeScore:null,awayScore:null,minute:null},
                {id:5,home:'BRA',away:'TUN',date:'2026-06-12',time:'19:00',venue:'MetLife Stadium, Nova York',group:'D',status:'upcoming',homeScore:null,awayScore:null,minute:null},
                {id:6,home:'FRA',away:'KSA',date:'2026-06-12',time:'22:00',venue:'AT&T Stadium, Dallas',group:'C',status:'upcoming',homeScore:null,awayScore:null,minute:null},
                {id:7,home:'ENG',away:'IRN',date:'2026-06-13',time:'13:00',venue:'Mercedes-Benz Stadium, Atlanta',group:'B',status:'upcoming',homeScore:null,awayScore:null,minute:null},
                {id:8,home:'ESP',away:'CAN',date:'2026-06-13',time:'16:00',venue:'NRG Stadium, Houston',group:'E',status:'upcoming',homeScore:null,awayScore:null,minute:null},
                {id:9,home:'POR',away:'GHA',date:'2026-06-13',time:'19:00',venue:'Gillette Stadium, Boston',group:'F',status:'upcoming',homeScore:null,awayScore:null,minute:null},
                {id:10,home:'GER',away:'AUS',date:'2026-06-13',time:'22:00',venue:'Lumen Field, Seattle',group:'D',status:'upcoming',homeScore:null,awayScore:null,minute:null}
            ],
            finished: []
        };

        const stats = {
            topScorers: [{rank:1,name:'Kylian Mbappé',team:'FRA',value:0,flag:'🇫🇷'},{rank:2,name:'Erling Haaland',team:'NOR',value:0,flag:'🇳🇴'},{rank:3,name:'Vinicius Jr.',team:'BRA',value:0,flag:'🇧🇷'},{rank:4,name:'Jude Bellingham',team:'ENG',value:0,flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿'},{rank:5,name:'Lautaro Martínez',team:'ARG',value:0,flag:'🇦🇷'}],
            topAssists: [{rank:1,name:'Kevin De Bruyne',team:'BEL',value:0,flag:'🇧🇪'},{rank:2,name:'Bruno Fernandes',team:'POR',value:0,flag:'🇵🇹'},{rank:3,name:'Lionel Messi',team:'ARG',value:0,flag:'🇦🇷'},{rank:4,name:'Jamal Musiala',team:'GER',value:0,flag:'🇩🇪'},{rank:5,name:'Rodri',team:'ESP',value:0,flag:'🇪🇸'}],
            yellowCards: [{rank:1,name:'Casemiro',team:'BRA',value:0,flag:'🇧🇷'},{rank:2,name:'Declan Rice',team:'ENG',value:0,flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿'},{rank:3,name:'Aurélien Tchouaméni',team:'FRA',value:0,flag:'🇫🇷'},{rank:4,name:'Federico Valverde',team:'URU',value:0,flag:'🇺🇾'},{rank:5,name:'Joshua Kimmich',team:'GER',value:0,flag:'🇩🇪'}],
            saves: [{rank:1,name:'Alisson Becker',team:'BRA',value:0,flag:'🇧🇷'},{rank:2,name:'Thibaut Courtois',team:'BEL',value:0,flag:'🇧🇪'},{rank:3,name:'Gianluigi Donnarumma',team:'ITA',value:0,flag:'🇮🇹'},{rank:4,name:'Emiliano Martínez',team:'ARG',value:0,flag:'🇦🇷'},{rank:5,name:'Mike Maignan',team:'FRA',value:0,flag:'🇫🇷'}]
        };

        // API Functions
        async function connectAPI() {
            const apiKey = document.getElementById('api-key-input').value.trim();
            if (!apiKey) { showToast('❌ Insira uma API Key válida'); return; }
            API_CONFIG.headers['x-apisports-key'] = apiKey;
            const statusDot = document.getElementById('api-status-dot');
            const statusText = document.getElementById('api-status-text');
            statusDot.className = 'status-dot'; statusText.textContent = 'Conectando...';
            try {
                const response = await fetch(`${API_CONFIG.baseURL}/status`, { headers: API_CONFIG.headers });
                if (response.ok) {
                    const data = await response.json();
                    if (data.response && data.response.subscription) {
                        apiConnected = true;
                        statusDot.className = 'status-dot connected';
                        statusText.textContent = `✅ Conectado - ${data.response.subscription.plan}`;
                        showToast('✅ API conectada com sucesso!');
                        localStorage.setItem('api-football-key', apiKey);
                        loadLiveData();
                        setInterval(loadLiveData, 30000);
                    } else { throw new Error('Invalid API key'); }
                } else { throw new Error('Connection failed'); }
            } catch (error) {
                statusDot.className = 'status-dot error';
                statusText.textContent = '❌ Erro na conexão - Verifique sua API Key';
                showToast('❌ Falha ao conectar. Verifique sua API Key.');
                apiConnected = false;
            }
        }

        async function loadLiveData() {
            if (!apiConnected) return;
            try {
                const liveResponse = await fetch(`${API_CONFIG.baseURL}/fixtures?live=all&league=${API_CONFIG.leagueId}&season=${API_CONFIG.season}`, { headers: API_CONFIG.headers });
                if (liveResponse.ok) {
                    const liveData = await liveResponse.json();
                    if (liveData.response && liveData.response.length > 0) updateLiveMatches(liveData.response);
                    else document.getElementById('matches-live').innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)"><div style="font-size:2rem;margin-bottom:10px">⏳</div><div>Nenhum jogo ao vivo no momento</div></div>';
                }
                const upcomingResponse = await fetch(`${API_CONFIG.baseURL}/fixtures?league=${API_CONFIG.leagueId}&season=${API_CONFIG.season}&status=NS`, { headers: API_CONFIG.headers });
                if (upcomingResponse.ok) {
                    const upcomingData = await upcomingResponse.json();
                    if (upcomingData.response) updateUpcomingMatches(upcomingData.response);
                }
                const finishedResponse = await fetch(`${API_CONFIG.baseURL}/fixtures?league=${API_CONFIG.leagueId}&season=${API_CONFIG.season}&status=FT`, { headers: API_CONFIG.headers });
                if (finishedResponse.ok) {
                    const finishedData = await finishedResponse.json();
                    if (finishedData.response) updateFinishedMatches(finishedData.response);
                }
                const standingsResponse = await fetch(`${API_CONFIG.baseURL}/standings?league=${API_CONFIG.leagueId}&season=${API_CONFIG.season}`, { headers: API_CONFIG.headers });
                if (standingsResponse.ok) {
                    const standingsData = await standingsResponse.json();
                    if (standingsData.response) updateStandings(standingsData.response);
                }
                document.getElementById('last-update').textContent = 'Última atualização: ' + new Date().toLocaleTimeString('pt-BR');
            } catch (error) { console.error('Error loading live data:', error); }
        }

        function updateLiveMatches(apiMatches) {
            const container = document.getElementById('matches-live');
            container.innerHTML = apiMatches.map(m => apiMatchToCard(m, 'live')).join('');
        }
        function updateUpcomingMatches(apiMatches) {
            document.getElementById('matches-upcoming').innerHTML = apiMatches.slice(0, 10).map(m => apiMatchToCard(m, 'upcoming')).join('');
        }
        function updateFinishedMatches(apiMatches) {
            const container = document.getElementById('matches-finished');
            if (apiMatches.length === 0) container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)"><div style="font-size:2rem;margin-bottom:10px">🏁</div><div>Nenhum jogo encerrado ainda</div></div>';
            else container.innerHTML = apiMatches.slice(0, 10).map(m => apiMatchToCard(m, 'finished')).join('');
        }

        function apiMatchToCard(fixture, status) {
            const home = fixture.teams?.home?.name || 'Time A';
            const away = fixture.teams?.away?.name || 'Time B';
            const homeCode = fixture.teams?.home?.code || 'TMA';
            const awayCode = fixture.teams?.away?.code || 'TMB';
            const homeFlag = teams[homeCode]?.flag || '🏳️';
            const awayFlag = teams[awayCode]?.flag || '🏳️';
            const homeScore = fixture.goals?.home ?? '-';
            const awayScore = fixture.goals?.away ?? '-';
            const minute = fixture.fixture?.status?.elapsed || '';
            const venue = fixture.fixture?.venue?.name || 'Estádio';
            const city = fixture.fixture?.venue?.city || '';
            const date = new Date(fixture.fixture?.date || '');
            const timeStr = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            const dateStr = date.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' });
            const round = fixture.league?.round || 'Grupo';
            const fixtureId = fixture.fixture?.id || 0;
            const statusClass = status === 'live' ? 'status-live' : status === 'finished' ? 'status-finished' : 'status-upcoming';
            const statusText = status === 'live' ? 'AO VIVO' : status === 'finished' ? 'ENCERRADO' : 'EM BREVE';
            const statusIcon = status === 'live' ? '<span class="pulse"></span>' : '';
            let scoreHtml = '';
            if (status === 'live' || status === 'finished') {
                scoreHtml = `<div class="score-display"><span>${homeScore}</span><span class="score-divider">:</span><span>${awayScore}</span></div>${status === 'live' ? `<div class="match-minute">${minute}'</div>` : ''}`;
            } else {
                scoreHtml = `<div class="score-display" style="font-size:1.2rem;color:var(--text-muted)">${timeStr}</div><div class="match-minute" style="color:var(--text-muted)">${dateStr}</div>`;
            }
            return `<div class="match-card"><button class="share-btn" onclick="openShareModal(${fixtureId},'${homeCode}','${awayCode}','${homeScore}','${awayScore}','${status}','${minute}')" title="Compartilhar">🔗</button><div class="match-header"><div class="match-status ${statusClass}">${statusIcon}<span>${statusText}</span></div><div class="match-time">${venue}${city ? ', ' + city : ''}</div></div><div class="match-body"><div class="teams-row"><div class="team home"><div class="team-info"><span class="team-name">${home}</span><span class="team-code">${homeCode}</span></div><span style="font-size:2rem">${homeFlag}</span></div><div class="score-section">${scoreHtml}</div><div class="team away"><span style="font-size:2rem">${awayFlag}</span><div class="team-info"><span class="team-name">${away}</span><span class="team-code">${awayCode}</span></div></div></div></div><div class="match-footer"><div class="match-venue">📍 ${city || venue}</div><div class="match-group">${round}</div></div></div>`;
        }

        function updateStandings(apiStandings) {
            if (apiStandings && apiStandings[0] && apiStandings[0].league) {
                const standings = apiStandings[0].league.standings;
                if (standings) {
                    standings.forEach(groupStanding => {
                        groupStanding.forEach(teamStanding => {
                            const groupName = teamStanding.group?.replace('Group ', '') || '';
                            if (groups[groupName]) {
                                const team = groups[groupName].find(t => t.team === teamStanding.team?.code);
                                if (team) {
                                    team.p = teamStanding.all?.played || 0; team.w = teamStanding.all?.win || 0;
                                    team.d = teamStanding.all?.draw || 0; team.l = teamStanding.all?.lose || 0;
                                    team.gf = teamStanding.all?.goals?.for || 0; team.ga = teamStanding.all?.goals?.against || 0;
                                    team.gd = teamStanding.goalsDiff || 0; team.pts = teamStanding.points || 0;
                                }
                            }
                        });
                    });
                    renderGroups();
                }
            }
        }

        // Share Functions
        function openShareModal(fixtureId, homeCode, awayCode, homeScore, awayScore, status, minute) {
            const home = teams[homeCode] || { name: homeCode, flag: '🏳️' };
            const away = teams[awayCode] || { name: awayCode, flag: '🏳️' };
            shareMatchData = { fixtureId, homeCode, awayCode, homeName: home.name, awayName: away.name, homeFlag: home.flag, awayFlag: away.flag, homeScore, awayScore, status, minute };
            let previewText = '';
            if (status === 'live') previewText = `${home.flag} ${home.name} ${homeScore} x ${awayScore} ${away.name} ${away.flag} (${minute}')`;
            else if (status === 'finished') previewText = `${home.flag} ${home.name} ${homeScore} x ${awayScore} ${away.name} ${away.flag} - FIM DE JOGO`;
            else previewText = `${home.flag} ${home.name} vs ${away.name} ${away.flag}`;
            document.getElementById('share-match-preview').textContent = previewText;
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(`🏆 Copa do Mundo 2026
${previewText}

Acompanhe em: `);
            document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
            document.getElementById('share-whatsapp').href = `https://wa.me/?text=${text}%20${url}`;
            document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            document.getElementById('share-telegram').href = `https://t.me/share/url?url=${url}&text=${text}`;
            document.getElementById('share-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeShareModal() {
            document.getElementById('share-modal').classList.remove('active');
            document.body.style.overflow = '';
            document.getElementById('copy-feedback').classList.remove('show');
        }

        function copyToClipboard() {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                document.getElementById('copy-feedback').classList.add('show');
                setTimeout(() => document.getElementById('copy-feedback').classList.remove('show'), 3000);
            }).catch(() => {
                const textarea = document.createElement('textarea');
                textarea.value = url; document.body.appendChild(textarea); textarea.select();
                document.execCommand('copy'); document.body.removeChild(textarea);
                document.getElementById('copy-feedback').classList.add('show');
                setTimeout(() => document.getElementById('copy-feedback').classList.remove('show'), 3000);
            });
        }

        function copyTextResult() {
            if (!shareMatchData) return;
            const { homeFlag, homeName, awayName, awayFlag, homeScore, awayScore, status, minute } = shareMatchData;
            let text = '';
            if (status === 'live') text = `🏆 Copa do Mundo 2026 - AO VIVO

${homeFlag} ${homeName} ${homeScore} x ${awayScore} ${awayName} ${awayFlag}
⏱️ ${minute} minutos

Acompanhe em: ${window.location.href}`;
            else if (status === 'finished') text = `🏆 Copa do Mundo 2026 - FIM DE JOGO

${homeFlag} ${homeName} ${homeScore} x ${awayScore} ${awayName} ${awayFlag}

Acompanhe em: ${window.location.href}`;
            else text = `🏆 Copa do Mundo 2026

${homeFlag} ${homeName} vs ${awayName} ${awayFlag}

Acompanhe em: ${window.location.href}`;
            navigator.clipboard.writeText(text).then(() => { showToast('✅ Resultado copiado!'); closeShareModal(); })
            .catch(() => {
                const textarea = document.createElement('textarea'); textarea.value = text;
                document.body.appendChild(textarea); textarea.select(); document.execCommand('copy');
                document.body.removeChild(textarea); showToast('✅ Resultado copiado!'); closeShareModal();
            });
        }

        document.getElementById('share-modal').addEventListener('click', function(e) { if (e.target === this) closeShareModal(); });
        document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeShareModal(); });

        // Utility Functions
        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message; toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
        function formatDate(dateStr) {
            const date = new Date(dateStr + 'T00:00:00');
            return date.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' });
        }

        // Render Functions
        function createMatchCard(match) {
            const homeTeam = teams[match.home]; const awayTeam = teams[match.away];
            const statusClass = match.status === 'live' ? 'status-live' : match.status === 'finished' ? 'status-finished' : 'status-upcoming';
            const statusText = match.status === 'live' ? 'AO VIVO' : match.status === 'finished' ? 'ENCERRADO' : 'EM BREVE';
            const statusIcon = match.status === 'live' ? '<span class="pulse"></span>' : '';
            let scoreHtml = '';
            if (match.status === 'live' || match.status === 'finished') {
                scoreHtml = `<div class="score-display"><span>${match.homeScore}</span><span class="score-divider">:</span><span>${match.awayScore}</span></div>${match.status === 'live' ? `<div class="match-minute">${match.minute}'</div>` : ''}`;
            } else {
                const date = new Date(match.date + 'T' + match.time);
                const timeStr = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                scoreHtml = `<div class="score-display" style="font-size:1.2rem;color:var(--text-muted)">${timeStr}</div><div class="match-minute" style="color:var(--text-muted)">${formatDate(match.date)}</div>`;
            }
            return `<div class="match-card"><button class="share-btn" onclick="openShareModal(${match.id},'${match.home}','${match.away}','${match.homeScore || '-'}','${match.awayScore || '-'}','${match.status}','${match.minute || ''}')" title="Compartilhar">🔗</button><div class="match-header"><div class="match-status ${statusClass}">${statusIcon}<span>${statusText}</span></div><div class="match-time">${match.venue}</div></div><div class="match-body"><div class="teams-row"><div class="team home"><div class="team-info"><span class="team-name">${homeTeam.name}</span><span class="team-code">${match.home}</span></div><span style="font-size:2rem">${homeTeam.flag}</span></div><div class="score-section">${scoreHtml}</div><div class="team away"><span style="font-size:2rem">${awayTeam.flag}</span><div class="team-info"><span class="team-name">${awayTeam.name}</span><span class="team-code">${match.away}</span></div></div></div></div><div class="match-footer"><div class="match-venue">📍 ${match.venue.split(',')[1] || match.venue}</div><div class="match-group">Grupo ${match.group}</div></div></div>`;
        }

        function createGroupCard(groupName, teamsData) {
            const rows = teamsData.map((t, i) => {
                const team = teams[t.team];
                return `<tr><td><span class="position pos-${i+1}">${i+1}</span><span style="font-size:1.2rem">${team.flag}</span><span style="font-weight:600">${team.name}</span></td><td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td><td>${t.gf}</td><td>${t.ga}</td><td style="font-weight:700">${t.gd > 0 ? '+' + t.gd : t.gd}</td><td class="points">${t.pts}</td></tr>`;
            }).join('');
            return `<div class="group-card"><div class="group-header"><span>Grupo ${groupName}</span><span style="font-size:0.9rem;opacity:0.8">4 seleções</span></div><table class="group-table"><thead><tr><th>Seleção</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th style="color:var(--accent)">Pts</th></tr></thead><tbody>${rows}</tbody></table></div>`;
        }

        function createStatCard(title, icon, data) {
            const items = data.map(item => `<div class="stat-item"><span class="stat-rank">${item.rank}</span><span style="font-size:1.3rem">${item.flag}</span><div class="stat-player"><div class="stat-player-name">${item.name}</div><div class="stat-player-team">${item.team}</div></div><span class="stat-value">${item.value}</span></div>`).join('');
            return `<div class="stat-card"><div class="stat-header"><span class="stat-title">${title}</span><span class="stat-icon">${icon}</span></div><div class="stat-list">${items}</div></div>`;
        }

        function renderMatches() {
            document.getElementById('matches-live').innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)"><div style="font-size:2rem;margin-bottom:10px">⏳</div><div>Nenhum jogo ao vivo no momento</div><div style="font-size:0.85rem;margin-top:8px;opacity:0.7">Conecte a API para ver jogos em tempo real</div></div>';
            document.getElementById('matches-upcoming').innerHTML = fallbackMatches.upcoming.map(m => createMatchCard(m)).join('');
            document.getElementById('matches-finished').innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)"><div style="font-size:2rem;margin-bottom:10px">🏁</div><div>Nenhum jogo encerrado ainda</div><div style="font-size:0.85rem;margin-top:8px;opacity:0.7">A Copa começa em 10 de junho de 2026</div></div>';
        }
        function renderGroups() {
            document.getElementById('groups-container').innerHTML = Object.entries(groups).map(([name, data]) => createGroupCard(name, data)).join('');
        }
        function renderStats() {
            document.getElementById('stats-container').innerHTML = createStatCard('Artilheiros', '⚽', stats.topScorers) + createStatCard('Assistências', '👟', stats.topAssists) + createStatCard('Cartões Amarelos', '🟨', stats.yellowCards) + createStatCard('Defesas', '🧤', stats.saves);
        }
        function showTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            event.target.classList.add('active');
        }

        // Countdown
        function updateCountdown() {
            const now = new Date();
            const opening = new Date('2026-06-11T16:00:00-03:00');
            const diff = opening - now;
            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                document.getElementById('days').textContent = String(days).padStart(2, '0');
                document.getElementById('hours').textContent = String(hours).padStart(2, '0');
                document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
                document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
            } else {
                document.getElementById('days').textContent = '00';
                document.getElementById('hours').textContent = '00';
                document.getElementById('minutes').textContent = '00';
                document.getElementById('seconds').textContent = '00';
            }
        }

        // Initialize
        const savedApiKey = localStorage.getItem('api-football-key');
        if (savedApiKey) document.getElementById('api-key-input').value = savedApiKey;
        renderMatches(); renderGroups(); renderStats();
        updateCountdown(); setInterval(updateCountdown, 1000);
        if (savedApiKey) setTimeout(() => connectAPI(), 1000);
    // end all scripts.
