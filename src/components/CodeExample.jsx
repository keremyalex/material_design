import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function CodeExample({ code, language = 'jsx', orientation = 'side', children, title, defaultShow = false }) {
    const [showCode, setShowCode] = useState(!!defaultShow)

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(code)
        } catch (e) {
            // fallback
            const el = document.createElement('textarea')
            el.value = code
            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)
        }
    }

    const isSide = orientation === 'side'

    return (
        <Paper sx={{ p: 2 }} elevation={1}>
            {title && (
                <Typography variant="subtitle1" sx={{ mb: 1 }}>{title}</Typography>
            )}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isSide ? { xs: 'column', md: 'row' } : 'column',
                    gap: 2,
                    alignItems: isSide ? 'flex-start' : 'stretch'
                }}
            >
                <Box sx={{ flex: 1 }}>{children}</Box>

                {/* Controls are always visible so the user can re-open code after hiding it */}
                <Box sx={{ width: isSide ? { xs: '100%', md: '45%' } : '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Stack direction="row" spacing={1}>
                            <Button size="small" variant="outlined" onClick={() => setShowCode((s) => !s)}>
                                {showCode ? 'Ocultar código' : 'Mostrar código'}
                            </Button>
                        </Stack>
                        <IconButton size="small" onClick={copy} title="Copiar código">
                            <ContentCopyIcon fontSize="small" />
                        </IconButton>
                    </Box>

                    {showCode && (
                        <SyntaxHighlighter language={language} style={vscDarkPlus} wrapLongLines>
                            {code}
                        </SyntaxHighlighter>
                    )}
                </Box>
            </Box>
        </Paper>
    )
}
