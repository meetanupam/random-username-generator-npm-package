const randomUsernameGenerator = (keywords) => {
    const adjectives = [
    'cyber', 'digital', 'tech', 'code', 'pixel', 'byte', 'viral', 'trendy', 'cloud', 'crypto',
    'data', 'virtual', 'web', 'geeky', 'alpha', 'beta', 'gamma', 'omega', 'ninja', 'hacker',
    'agile', 'dynamic', 'aggressive', 'adaptive', 'advanced', 'artificial', 'biometric', 'brilliant', 'collaborative', 'complex',
    'creative', 'critical', 'cross-platform', 'cutting-edge', 'daring', 'dazzling', 'decentralized', 'diligent', 'disruptive', 'elastic',
    'emerging', 'empowered', 'encrypted', 'enhanced', 'enterprise', 'exceptional', 'exponential', 'express', 'extreme', 'flexible',
    'forward-thinking', 'futuristic', 'game-changing', 'global', 'groundbreaking', 'high-tech', 'holistic', 'hybrid', 'hyper', 'innovative',
    'integrated', 'interactive', 'intuitive', 'lean', 'lightweight', 'magical', 'mobile', 'modular', 'next-gen', 'nimble',
    'open-source', 'optimal', 'orchestrated', 'pioneering', 'powerful', 'precision', 'proactive', 'progressive', 'real-time', 'responsive',
    'revolutionary', 'scalable', 'secure', 'self-learning', 'smart', 'streamlined', 'sustainable', 'synergistic', 'systematic', 'transformative',
    'unified', 'user-centric', 'user-friendly', 'versatile', 'vibrant', 'visionary', 'wireless', 'zen'
];

const nouns = [
    'coder', 'developer', 'programmer', 'hacker', 'guru', 'nerd', 'geek', 'byte', 'pixel', 'script',
    'app', 'bot', 'wizard', 'master', 'jedi', 'unicorn', 'phoenix', 'rocket', 'sprint', 'echo',
    'algorithm', 'avatar', 'avatar', 'backend', 'frontend', 'API', 'blockchain', 'browser', 'bytecode', 'cache',
    'chatbot', 'cloud', 'codebase', 'compiler', 'container', 'cookie', 'crypto', 'dashboard', 'debugger', 'deployment',
    'designer', 'devops', 'endpoint', 'firewall', 'framework', 'frontend', 'function', 'git', 'hash', 'IDE',
    'interface', 'kernel', 'loop', 'machine', 'method', 'module', 'monitor', 'object', 'operator', 'package',
    'parser', 'pattern', 'platform', 'protocol', 'query', 'queue', 'react', 'repository', 'router', 'schema',
    'script', 'server', 'service', 'socket', 'stack', 'storage', 'syntax', 'terminal', 'thread', 'token',
    'vector', 'virtual', 'webhook', 'widget', 'workflow', 'workspace', 'x-ray', 'yarn', 'zero-day', 'zone'
];


    const shuffledAdjectives = shuffle(adjectives);
    const shuffledNouns = shuffle(nouns);

    const usernames = [];

    keywords.forEach(keyword => {
        const adjective = shuffledAdjectives.pop() || 'random';
        const noun = shuffledNouns.pop() || 'user';
        usernames.push(`${adjective}_${noun}_${keyword}`);
    });

    return usernames;
};

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

module.exports = randomUsernameGenerator;
